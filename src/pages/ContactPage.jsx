import { ContactForm } from "../components/cards/ContactForm.jsx"
import { ContactInfoBar } from "../components/ContactInfoBar.jsx"
import { BreadcrumbHeader } from "../components/header/BreadcrumbHeader"


export const ContactPage = () => {

  return (
    <div>
      <BreadcrumbHeader name="Contact" subName="Contact"/>
        <ContactInfoBar/>
      <div  className="flex flex-col py-8 px-10 lg:px-12 xl:px-50 mt-10 w-full gap-8 xl:min-h-screen">
        <h2 className="text-center text-3xl md:text-5xl text-foreground font-bold">Send your message.</h2>
        <ContactForm/>
      </div>
    </div>
  )
}