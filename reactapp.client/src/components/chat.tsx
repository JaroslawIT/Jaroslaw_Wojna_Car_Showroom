import { useState } from 'react';

interface ChatProps {
    color: string;
}

const Chat = ({ color }: ChatProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'Konsultant', text: 'Witaj! W czym mogę pomóc?' }
    ]);
    const [newMessage, setNewMessage] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { sender: 'Użytkownik', text: newMessage }]);
            setNewMessage('');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
    };

    return (
        <div>
            {!isOpen && (
                <div
                    className="chat-bubble"
                    style={{ backgroundColor: color }}
                    onClick={toggleChat}
                >
                    <p>Chcesz porozmawiać z konsultantem?</p>
                </div>
            )}
            {isOpen && (
                <div className="chat-window" style={{ borderColor: color }}>
                    <div className="chat-header">
                        <span onClick={toggleChat}>X</span>
                    </div>
                    <div className="chat-body">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender}`}>
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-footer">
                        <input
                            type="text"
                            placeholder="Napisz wiadomość..."
                            value={newMessage}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSendMessage}>Wyślij</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
