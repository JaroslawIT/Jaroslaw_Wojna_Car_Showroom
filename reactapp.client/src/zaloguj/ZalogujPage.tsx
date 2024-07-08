import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Row, Card, Form, Button, Col } from 'react-bootstrap';
import Animowany4 from '../components/anim4';
import Chat from '../components/chat';

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    remember: boolean;
}

export const Zaloguj: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        confirmPassword: '',
        remember: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.email) {
            newErrors.email = 'Adres email jest wymagany';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Nieprawidłowy adres email';
        }

        if (!formData.password) {
            newErrors.password = 'Hasło jest wymagane';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Hasło musi mieć co najmniej 6 znaków';
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = 'Hasło musi zawierać co najmniej jedną dużą literę';
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            newErrors.password = 'Hasło musi zawierać co najmniej jeden znak specjalny';
        } else if (formData.password.length > 20) {
            newErrors.password = 'Hasło nie może być dłuższe niż 20 znaków';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Potwierdzenie hasła jest wymagane';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Hasła nie pasują do siebie';
        }

        if (formData.email.length > 50) {
            newErrors.email = 'Adres email nie może być dłuższy niż 50 znaków';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form data:', formData);
        }
    };

    return (
        <div className="resp-container">
        <Container className="custom-container">
            <Row className="justify-content-center">
                <Card className="mx-auto mt-5" style={{ maxWidth: '500px', backgroundColor: 'transparent', border: 'none' }}>
                    <Card.Body>
                        <h2 className="text-center mb-4">Zaloguj się</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Adres email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Wpisz email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                                <Form.Text className="text-muted">
                                    Nie udostępniamy Twojego adresu email nikomu innemu.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Hasło</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Hasło"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicConfirmPassword">
                                <Form.Label>Potwierdź hasło</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Potwierdź hasło"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    isInvalid={!!errors.confirmPassword}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check
                                    type="checkbox"
                                    label="Zapamiętaj mnie"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 mt-5">
                                Wyślij
                            </Button>
                            <div>
                                <Animowany4 />
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <Row>
                    <Col>
                        <Chat color="#ba9bf2" />
                    </Col>
                </Row>
            </Row>
            </Container>
        </div>
    );
};

export default Zaloguj;
