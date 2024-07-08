import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Kontakt2: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    const validateName = (name: string): boolean => {
        const regex = /^[A-Za-z\s]*$/;
        return regex.test(name);
    };

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateMessage = (message: string): boolean => {
        return message.length <= 100;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const newErrors: { name?: string; email?: string; message?: string } = {};

        if (!validateName(name)) {
            newErrors.name = 'Imię może zawierać tylko litery.';
        }

        if (!validateEmail(email)) {
            newErrors.email = 'Wprowadź prawidłowy adres email.';
        }

        if (!validateMessage(message)) {
            newErrors.message = 'Wiadomość nie może być dłuższa niż 100 znaków.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            
            console.log({ name, email, message });
        }
    };

    return (
        <Container className="custom-container">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="mt-5 mb-4">Skontaktuj się z Nami</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Imię</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                                isInvalid={!!errors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Wiadomość</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={message}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                                isInvalid={!!errors.message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Wyślij
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Kontakt2;
