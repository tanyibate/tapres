export const sendEmail = async ({
  name,
  message,
  email,
}: {
  name: string;
  message: string;
  email: string;
}) => {
  if (!message || !email) {
    throw new Error("Message and email are required");
  } // Validate the input

  if (!name) {
    name = "Anonymous";
  }
  const response = await fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });
  if (!response.ok) {
    throw new Error("Failed to send email");
  }
  return response.json();
};
