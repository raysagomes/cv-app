import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // const SignUpForm = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [message, setMessage] = useState("");

// //   const handleSignUp = async (e) => {
// //     e.preventDefault();
// //     const auth = getAuth();

// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       setMessage(`Usuário criado com sucesso: ${userCredential.user.email}`);
// //       setEmail("");
// //       setPassword("");
// //     } catch (error) {
// //       setMessage(`Erro: ${error.message}`);
// //     }
// //   };

// //   return (
// //     <Container className="mt-5">
// //       <Row className="justify-content-md-center">
// //         <Col md={6}>
// //           <h2>Cadastro</h2>
// //           <Form onSubmit={handleSignUp}>
// //             <Form controlId="formBasicEmail">
// //               <Form.Label>Email</Form.Label>
// //               <Form.Control
// //                 type="email"
// //                 placeholder="Digite seu email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 required
// //               />
// //             </Form>

// //             <Form controlId="formBasicPassword" className="mt-3">
// //               <Form.Label>Senha</Form.Label>
// //               <Form.Control
// //                 type="password"
// //                 placeholder="Digite sua senha"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 required
// //               />
// //             </Form>

// //             <Button variant="primary" type="submit" className="mt-3">
// //               Criar Conta
// //             </Button>
// //           </Form>

// //           {message && <p className="mt-3">{message}</p>}
// //         </Col>
// //       </Row>
// //     </Container>
//   );
// };

// export default Signup;
