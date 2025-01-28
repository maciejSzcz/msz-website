import { Section } from "@/components/section";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return "Welcome to the new react";
};

export default async function Blog() {
  const data = await getData();
  return (
    <main>
      <Section id="home" className="relative overflow-hidden">
        <p>{data}</p>
      </Section>
    </main>
  );
}
