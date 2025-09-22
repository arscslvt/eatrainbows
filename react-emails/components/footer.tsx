import { Section, Img, Text, Row, Column, Link } from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const Footer = () => {
  return (
    <Section className="text-center w-full">
      <table className="w-full">
        <tr className="w-full">
          <td align="center">
            <Img
              alt="React Email logo"
              height="42"
              src={`${baseUrl}/static/eatrainbows-icon-lucid.png`}
            />
          </td>
        </tr>
        <tr className="w-full">
          <td align="center">
            <Text className="my-[8px] font-semibold text-[16px] text-gray-900 leading-[24px]">
              EatRainbows
            </Text>
            <Text className="mt-[4px] mb-0 text-[16px] text-gray-500 leading-[24px]">
              We like building fun.
            </Text>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Row className="table-cell h-[44px] w-[56px] align-bottom">
              <Column className="pr-[8px]">
                <Link href="https://x.com/EatRainbowsDev" target="_blank">
                  <Img
                    alt="X"
                    height="36"
                    src="https://react.email/static/x-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
            </Row>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Text className="mt-[4px] mb-0 font-medium text-[16px] text-gray-500 leading-[24px]">
              hello@eatrainbows.co — +39 338 112 6750
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  );
};
