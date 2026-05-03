"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, BotMessageSquare, User, Loader2, Sparkles } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { useTranslation } from "@/lib/i18n";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  options?: string[];
};

import { postRequest } from "@/lib/client-api";

export default function AssistantPage() {
  const { userData } = useAppContext();
  const t = useTranslation(userData.language);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: t.assistant.greeting.replace("{state}", userData.state || "India").replace("{status}", userData.voterStatus || ""),
      options: [
        "Am I eligible to vote?",
        "How do I register?",
        "What documents do I need?",
        "Find my polling booth"
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newMsg: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages(prev => [...prev, newMsg]);
    setInput("");
    setIsTyping(true);

    // Call real Gemini API
    const runAI = async () => {
      try {
        const data = await postRequest<{ response: string }>("/api/chat", {
          message: text,
          history: messages.slice(1), // Exclude initial greeting from formal history to save tokens
          context: userData
        });

        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: "assistant",
          content: data.response
        }]);
      } catch (error: any) {
        console.error(error);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          role: "assistant",
          content: `Oops! Something went wrong: ${error.message}. Please check your connection or try again later.`
        }]);
      } finally {
        setIsTyping(false);
      }
    };

    runAI();
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex items-center gap-3 mb-6 p-4 rounded-2xl bg-card border border-border shadow-sm">
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          <BotMessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            VoteWise Assistant <Sparkles className="w-4 h-4 text-yellow-500" />
          </h1>
          <p className="text-sm text-muted-foreground">Your personalized civic guide.</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pr-4 space-y-6" aria-live="polite" role="log">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex gap-4 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
            >
              <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${
                msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground"
              }`}>
                {msg.role === "user" ? <User className="w-5 h-5" /> : <BotMessageSquare className="w-5 h-5" />}
              </div>
              <div className={`space-y-3 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <div className={`p-4 rounded-2xl shadow-sm whitespace-pre-wrap ${
                  msg.role === "user" 
                    ? "bg-primary text-primary-foreground rounded-tr-sm" 
                    : "bg-card border border-border text-foreground rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>
                {msg.options && (
                  <div className="flex flex-wrap gap-2">
                    {msg.options.map((opt, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => handleSend(opt)}
                        className="px-4 py-2 text-sm bg-secondary hover:bg-primary/20 hover:text-primary border border-border rounded-full transition-colors text-foreground"
                      >
                        {opt}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4 max-w-[85%]"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-sm">
                <BotMessageSquare className="w-5 h-5" />
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border rounded-tl-sm shadow-sm flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                <span className="text-muted-foreground text-sm font-medium">Thinking...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-6">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
          className="relative flex items-center"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.assistant.placeholder}
            aria-label={t.assistant.placeholder}
            className="w-full p-4 pr-16 rounded-2xl border border-border bg-card shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
            className="absolute right-2 p-2 bg-primary text-primary-foreground rounded-xl disabled:opacity-50 transition-colors hover:bg-primary/90"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
