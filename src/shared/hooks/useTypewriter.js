import { useEffect, useState } from "react";

export default function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 50, delayBetween = 2000 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 500);
    } else {
      const speed = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(() => {
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1));
        } else {
          setText(currentWord.substring(0, text.length + 1));
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typeSpeed, deleteSpeed, delayBetween]);

  return text;
}
