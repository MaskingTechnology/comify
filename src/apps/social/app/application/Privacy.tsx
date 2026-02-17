
import { Column, List, Paragraph, Text, Title } from '@maskingtech/designsystem';

export default function Feature()
{
    return <Column gap='large'>

    
        <Column gap='medium'>
            <Title size='large'>Privacy Policy</Title>
            <Paragraph>
                Last updated: February 3, 2026
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>1. Introduction</Title>
            <Paragraph>
                This Privacy Policy explains how Comify processes personal data in accordance with the General Data Protection Regulation (GDPR).
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>2. Data Controller</Title>
            <Paragraph>
                The data controller is Masking Technology, Noordwijk, the Netherlands.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>3. Personal Data We Process</Title>
            <Paragraph>
                We process the following personal data:
            </Paragraph>
            <List type='unordered'>
                <List.Item>Full name and nickname</List.Item>
                <List.Item>Email address</List.Item>
                <List.Item>Account registration date</List.Item>
                <List.Item>Content you create (comics, reactions)</List.Item>
                <List.Item>IP address and basic technical data for security purposes</List.Item>
            </List>
            <Paragraph>
                We do not use third-party advertising cookies.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>4. Legal Bases for Processing</Title>
            <Paragraph>
                We process personal data based on:
            </Paragraph>
            <List type='unordered'>
                <List.Item>Performance of a contract (providing the Comify service)</List.Item>
                <List.Item>Legitimate interests (security, platform improvement)</List.Item>
                <List.Item>Legal obligations where applicable</List.Item>
            </List>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>5. Use of Social Login Providers</Title>
            <Paragraph>
                If you choose to register or log in using a third-party provider, we receive limited information necessary to create and authenticate your Account.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>6. Cookies</Title>
            <Paragraph>
                Comify uses only essential cookies required for authentication and basic functionality. No tracking or advertising cookies are used.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>7. Data Retention</Title>
            <Paragraph>
                We retain personal data for as long as your Account is active or as necessary to comply with legal obligations. IP addresses are retained only as long as required for security purposes.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>8. Your Rights</Title>
            <Paragraph>
                You have the right to:
            </Paragraph>
            <List type='unordered'>
                <List.Item>Access your personal data</List.Item>
                <List.Item>Correct inaccurate data</List.Item>
                <List.Item>Request deletion of your data</List.Item>
                <List.Item>Restrict or object to processing</List.Item>
                <List.Item>Receive your data in a portable format</List.Item>
                <List.Item>Lodge a complaint with a supervisory authority</List.Item>
            </List>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>9. Security Measures</Title>
            <Paragraph>
                We take appropriate technical and organizational measures to protect personal data, including encrypted password storage.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>10. Contact</Title>
            <Paragraph>
                For privacy-related questions or Account deletion requests, contact:
                Email: comify@masking.tech
            </Paragraph>
        </Column>

    </Column>;
}
