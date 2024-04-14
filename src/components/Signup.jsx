import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setError // Include setError in the destructured object
    } = useForm({ mode: 'onChange' });

    const onSubmit = (data) => {
        if (data.password !== data.confirmpassword) {
            setError("confirmpassword", {
                type: "validate",
                message: "Passwords do not match."
            });
            return; 
        }
        // Handle form submission
    };

    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
            <div className='rounded' style={{ width: "1000px", padding: "30px", border: "1px solid black" }}>
                <h1 style={{ textAlign: 'center', margin: '10px', color: 'black' }}>Sign up</h1>
                <Form className="formStyle" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" 
                            {...register("name", { required: true })} />
                        {errors.name && <p className='text-danger'>Name is required</p>}
                    </Form.Group>

                    <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                            {...register("email", { required: true, pattern: /^[A-Za-z]{3,12}(@)(gmail|yahoo)(.com)$/ })} />
                        {errors.email && <p className='text-danger'>Invalid Email</p>}
                    </Form.Group>

                    <Form.Group className="mb-3 col-md-6" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" 
                            {...register("username", { required: true, pattern: /^\S+$/ })} />
                        {errors.username && <p className='text-danger'>Username should not have any spaces</p>}
                    </Form.Group>

                    <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                            {...register("password", { required: true, pattern: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/ })} />
                        {errors.password && <p className='text-danger'>Password must be at least 6 characters .</p>}
                    </Form.Group>

                    <Form.Group className="mb-3 col-md-6" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" 
                            {...register("confirmpassword", {
                                required: true,
                                validate: (value) => value === getValues("password") || "Passwords do not match"
                            })} />
                        {errors.confirmpassword && <p className='text-danger'>{errors.confirmpassword.message}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
            </div>
        </div>
    );
}
