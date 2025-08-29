import { Send } from "lucide-react";

export const SubscribeSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-4 py-10 px-10 min-h-[50vh]">
      <h2 className="text-foreground text-4xl font-bold max-w-lg">
        Subscribe to our newsletter, We don't make any spam.
      </h2>
      <p className="text-xs text-muted max-w-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor enim minim.
      </p>

      <form className="flex w-full max-w-lg mx-auto relative">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:border-primary focus:outline-none"
        />
        <button
          type="submit"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-background p-2 rounded-full"
        >
          <Send size={24} />
        </button>
      </form>
    </section>
  );
};
