import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
  pixelBasedPreset,
} from "@react-email/components";
import { Footer } from "../components/footer";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const CustomerSupportReceipt = () => (
  <Tailwind
    config={{
      presets: [pixelBasedPreset],
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>
        Thanks for reaching out! 🌈 We’ve received your request and one of our
        experts will contact you within 24h to bring your vision online. ✨!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={`${baseUrl}/static/eatrainbows-email-logo.png`}
              height="48"
              alt="EatRainbows"
            />
            <Hr style={hr} />
            <Text style={paragraph}>
              Hi there,
              <br />
              Thank you for reaching out to EatRainbows! 🌟
            </Text>
            <Text style={paragraph}>
              We’ve received your request and we’re excited to learn more about
              your vision.
            </Text>
            <Text style={paragraph}>
              Our team will review your message and get back to you shortly with
              ideas on how we can bring your business online in the most
              colorful and creative way.
            </Text>
            <Hr style={hr} />
            <Text style={heading}>✨ Next step</Text>
            <Text style={paragraph}>
              One of our experts will contact you within 24 hours to schedule
              your free consultation. You’ll see your first mockup soon – and
              remember, you only pay if you love it.
            </Text>
            <Text style={paragraph}>Talk to you soon,</Text>
            <Text style={paragraph}>— The EatRainbows Team 🌈</Text>
            <Hr style={hr} />
          </Section>
          <Footer />
          <Text style={footer} className="text-center">
            EatRainbows is a team of passionate designers and developers from
            southern Italy
            <br />
            Made with ❤️ in Catania
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default CustomerSupportReceipt;

const main = {
  backgroundColor: "#F5F1EE",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const heading = {
  color: "#171717",

  fontSize: "18px",
  fontWeight: "600" as const,
  lineHeight: "24px",
  textAlign: "left" as const,
};

const paragraph = {
  color: "#171717",

  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#F24394",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
