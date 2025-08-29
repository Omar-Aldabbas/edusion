import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

export const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [isForgot, setIsForgot] = useState(false);

  const formVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-background rounded-lg shadow-md border-t-4 border-primary p-8">
        <h2 className="text-2xl mb-6">
          {isForgot
            ? "Reset Password"
            : isSignup
            ? "Create an Account"
            : "Hi, Welcome back!"}
        </h2>

        <AnimatePresence mode="wait">
          {isSignup && !isForgot && (
            <motion.form
              key="signup"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition-colors"
              >
                Sign Up
              </button>
              <p className="text-sm text-center">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-primary font-semibold hover:underline"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </button>
              </p>
            </motion.form>
          )}

          {!isSignup && !isForgot && (
            <motion.form
              key="login"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 focus:ring-primary"
                  />
                  Remember my password
                </label>
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() => setIsForgot(true)}
                >
                  Forgot Password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition-colors"
              >
                Login
              </button>
              <p className="text-sm text-center">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-primary font-semibold hover:underline"
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </button>
              </p>
            </motion.form>
          )}

          {isForgot && (
            <motion.form
              key="forgot"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition-colors"
              >
                Reset Password
              </button>
              <p className="text-sm text-center">
                Remembered your password?{" "}
                <button
                  type="button"
                  className="text-primary font-semibold hover:underline"
                  onClick={() => {
                    setIsForgot(false);
                    setIsSignup(false);
                  }}
                >
                  Login
                </button>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
