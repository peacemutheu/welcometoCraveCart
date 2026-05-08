import React, { useState } from "react";

const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: "bot",
            text:
                "Hello 👋 Welcome to CraveCart! I’m here to help you find tasty snacks, drinks, and treats 😋"
        }
    ]);
    const [input, setInput] = useState("");

    const products = [
        { name: "Delamere Yogurt 🥛", price: 150 },
        { name: "Snickers 🍫", price: 185 },
        { name: "Heroes Chips 🌶️", price: 70 },
        { name: "Pringles 🥔", price: 450 },
        { name: "Monster Energy Drink ⚡", price: 210 },
        { name: "Fiesta Caramel & Nuts 🍬", price: 100 },
        { name: "Minute Maid Tropical 🧃", price: 90 },
        { name: "Ola Crisps Mexican Crunch 🍟", price: 70 },
        { name: "Chevda Mild 🌰", price: 180 },
        { name: "Dairy Milk Bubblegum Milk 🥛", price: 65 },
        { name: "Red Velvet Cake Mix 🎂", price: 780 },
        { name: "Pina Colada Ice Cream 🍦", price: 450 },
        { name: "Pizza Slice 🍕", price: 200 },
        { name: "Nyamabite 🍖", price: 100 },
        { name: "Shawarma 🌯", price: 450 },
        { name: "Savannah Cider 🍺", price: 320 }
    ];

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { from: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);

        const key = input.toLowerCase();

        let reply = "Hmm 🤔 try asking about snacks, drinks, or products.";

        // LOCATION
        if (key.includes("location") || key.includes("where")) {
            reply =
                "📍 We are based in Nairobi, Kenya.\n🚚 We deliver countrywide across Kenya!";
        }

        // DELIVERY
        else if (key.includes("delivery")) {
            reply = "🚚 Yes! We deliver countrywide across Kenya from Nairobi 📍";
        }

        // PRODUCTS LIST
        else if (key.includes("product") || key.includes("menu")) {
            reply =
                "Yeah 😍 here’s what we’ve got:\n\n" +
                products.map((p) => `${p.name} - Ksh ${p.price}`).join("\n");
        }

        // GREETING
        else if (key.includes("hi") || key.includes("hello")) {
            reply = "Hello 👋 Welcome to CraveCart! What are you craving today?";
        }

        // GOODBYE
        else if (
            key.includes("bye") ||
            key.includes("thank you") ||
            key.includes("thanks")
        ) {
            reply = "Thank you for visiting CraveCart ❤️ See you again soon 👋";
        }

        // PRODUCT CHECK (ONLY ONE STYLE RESPONSE)
        else {
            const match = products.find((p) =>
                key.includes(p.name.toLowerCase().split(" ")[0])
            );

            if (match) {
                reply = `Yeah we have that one 😊 ${match.name} - Ksh ${match.price}. Would you like to order it? 🛒`;
            }
        }

        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text: reply }]);
        }, 500);

        setInput("");
    };

    return (
        <>
            {/* FLOAT BUTTON */}
            <div
                onClick={() => setOpen(!open)}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    background: "#111",
                    color: "white",
                    padding: "15px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    zIndex: 1000
                }}
            >
                💬
            </div>

            {/* CHAT WINDOW */}
            {open && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "80px",
                        right: "20px",
                        width: "320px",
                        height: "420px",
                        background: "white",
                        border: "1px solid #ddd",
                        borderRadius: "12px",
                        display: "flex",
                        flexDirection: "column",
                        zIndex: 1000
                    }}
                >
                    {/* HEADER */}
                    <div
                        style={{
                            padding: "10px",
                            background: "#111",
                            color: "white",
                            fontWeight: "bold"
                        }}
                    >
                        CraveCart 🛒
                    </div>

                    {/* MESSAGES */}
                    <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                style={{
                                    textAlign: msg.from === "user" ? "right" : "left",
                                    margin: "6px 0"
                                }}
                            >
                                <span
                                    style={{
                                        background: msg.from === "user" ? "#007bff" : "#eee",
                                        color: msg.from === "user" ? "white" : "black",
                                        padding: "8px 12px",
                                        borderRadius: "12px",
                                        display: "inline-block"
                                    }}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* INPUT */}
                    <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask for snacks, drinks..."
                            style={{ flex: 1, padding: "10px", border: "none" }}
                        />
                        <button onClick={handleSend} style={{ padding: "10px" }}>
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;