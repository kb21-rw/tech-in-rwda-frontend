import ContactForm from "@/components/ContactForm";
import TextBlock from "@/components/TextBlock";
const title = {
  text: "Contact us",
};
export default function Contact() {
  return (
    <main className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <TextBlock title={title} />
        <ContactForm />
      </div>
    </main>
  );
}
