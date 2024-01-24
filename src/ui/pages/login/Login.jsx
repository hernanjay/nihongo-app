import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

import {
    Flex,
    FormControl,
    Button,
    Spacer,
    CardBody,
    Link,
} from "@chakra-ui/react";

import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { useLogin } from "../../../logic/hooks/user/useLogin";
import Loader from "../../components/Loader";
import ThemeColors from "../main/ThemeColors";
import LoginFormContainer from "../../components/login/LoginFormContainer";
import LoginFormCard from "../../components/login/LoginFormCard";
import LoginFormCardHeader from "../../components/login/LoginFormCardHeader";
import LoginEmailInputField from "../../components/login/LoginEmailInputField";
import LoginPasswordInputField from "../../components/login/LoginPasswordInputField";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { border } = ThemeColors();
    const { login, isLoading } = useLogin();
    const { isOpen, onToggle, onClose } = useDisclosure();

    function isEmailEmpty() {
        return email === "" ? true : false;
    }

    function isPasswordEmpty() {
        return password === "" ? true : false;
    }

    const handleSubmit = async (e) => {
        onToggle();
        e.preventDefault();
        console.log(isLoading);
        if (!isEmailEmpty() && !isPasswordEmpty()) {
            login({ email: email + "@awsys-i.com", password });
        }
    };

    if (isLoading) return <Loader isLoading={isLoading} />;

    return (
        <LoginFormContainer>
            <LoginFormCard>
                <LoginFormCardHeader />
                {/* Login Form */}
                <CardBody mx={{ base: "-1em" }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            {/* Email Input */}
                            <LoginEmailInputField
                                email={email}
                                isEmailEmpty={isEmailEmpty}
                                setEmail={setEmail}
                                isOpen={isOpen}
                                onClose={onClose}
                            />

                            {/* Password Input */}
                            <LoginPasswordInputField
                                password={password}
                                setPassword={setPassword}
                                isPasswordEmpty={isPasswordEmpty}
                                isOpen={isOpen}
                                onClose={onClose}
                            />

                            {/* Forgot password */}
                            <Flex>
                                <Spacer />
                                <Link
                                    fontSize={{ base: "0.75em", lg: "1em" }}
                                    my={{ base: "1.5em", lg: "1em" }}
                                    onClick={() => {
                                        navigate("/recovery");
                                    }}
                                >
                                    Forgot Password <QuestionOutlineIcon />
                                </Link>
                            </Flex>
                            <Flex>
                                <Spacer />
                                <Button
                                    mb={{ base: "2.5vh" }}
                                    data-testid="login-button"
                                    variant="outline"
                                    borderColor={border}
                                    type="submit"
                                    // isDisabled={isLoading}
                                    isLoading={isLoading}
                                >
                                    Login
                                </Button>
                            </Flex>
                        </FormControl>
                    </form>
                </CardBody>
            </LoginFormCard>
        </LoginFormContainer>
    );
}
