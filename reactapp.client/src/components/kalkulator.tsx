import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

interface Errors {
    amount?: string;
    interest?: string;
    months?: string;
}

const LoanCalculator = () => {
    const [amount, setAmount] = useState<number | string>('');
    const [interest, setInterest] = useState<number | string>('');
    const [months, setMonths] = useState<number | string>('');
    const [payment, setPayment] = useState<string>('');
    const [errors, setErrors] = useState<Errors>({});

    const validateInputs = () => {
        const newErrors: Errors = {};

        if (!amount || +amount <= 0) {
            newErrors.amount = 'Kwota pożyczki musi być większa od zera';
        }
        if (!interest || +interest <= 0) {
            newErrors.interest = 'Oprocentowanie musi być większe od zera';
        }
        if (!months || +months <= 0) {
            newErrors.months = 'Liczba miesięcy musi być większa od zera';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const calculatePayment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateInputs()) {
            return;
        }

        const principal = parseFloat(amount as string);
        const calculatedInterest = parseFloat(interest as string) / 100 / 12;
        const calculatedPayments = parseFloat(months as string);

        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);

        if (isFinite(monthly)) {
            setPayment(monthly.toFixed(2));
        } else {
            setPayment('');
        }
    };

    return (
        <div className="custom-loan-calculator large-width">
            <Form onSubmit={calculatePayment}>
                <Form.Group controlId="amount">
                    <Form.Label>Kwota pożyczki</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Wpisz kwotę"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        isInvalid={!!errors.amount}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.amount}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="interest">
                    <Form.Label>Oprocentowanie roczne (%)</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Wpisz oprocentowanie"
                        value={interest}
                        onChange={e => setInterest(e.target.value)}
                        isInvalid={!!errors.interest}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.interest}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="months">
                    <Form.Label>Liczba miesięcy</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Wpisz liczbę miesięcy"
                        value={months}
                        onChange={e => setMonths(e.target.value)}
                        isInvalid={!!errors.months}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.months}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>Oblicz</Button>

                <p className="result">{payment && `Miesięczna rata wynosi: ${payment} PLN`}</p>
            </Form>

            <div style={{ color: "black", padding: "50px", fontFamily: "Arial", textAlign: "center", fontSize: '24px' }}>
                Skontaktuj się z Naszymi Konsultantami !!!
            </div>
        </div>
    );
};

export default LoanCalculator;
