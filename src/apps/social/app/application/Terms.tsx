
import { Column, List, Paragraph, Text, Title } from '@maskingtech/designsystem';

export default function Feature()
{
    return <Column gap='large'>
    
        <Column gap='medium'>
            <Title size='large'>Terms of Use</Title>
            <Paragraph>
                Last updated: February 3, 2026
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>1. About Comify</Title>
            <Paragraph>
                Comify is an online, open-source, comic-based social media platform operated by Masking Technology, a company registered in the Netherlands and listed in the Dutch Trade Register (Handelsregister) under Chamber of Commerce number 81340982.
                These Terms of Use govern your access to and use of the Comify platform. By creating an account or using Comify, you agree to these Terms of Use.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>2. Definitions</Title>
            <List type='unordered'>
                <List.Item>
                    <Text weight='bold' value='Comify:' /> The Comify platform, website, and related services.
                </List.Item>
                <List.Item>
                    <Text weight='bold' value='User:' /> Any natural person who creates an account on Comify.
                </List.Item>
                <List.Item>
                    <Text weight='bold' value='Account:' /> The personal account created by a User to access Comify.
                </List.Item>
                <List.Item>
                    <Text weight='bold' value='Content:' /> Any comics, images, text, reactions, or other materials uploaded or created by Users.
                </List.Item>
                <List.Item>
                    <Text weight='bold' value='We / Us:' /> Masking Technology, operating Comify.
                </List.Item>
            </List>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>3. Eligibility and Account Registration</Title>
            <List type='ordered'>
                <List.Item>You must be at least 16 years old to use Comify.</List.Item>
                <List.Item>To create an account, you must provide accurate and complete information, including your full name, nickname, and email address.</List.Item>
                <List.Item>Accounts may be created using a registration form or supported third-party social login providers.</List.Item>
                <List.Item>Each User may create only one Account.</List.Item>
                <List.Item>You are responsible for keeping your login credentials confidential. All activity performed through your Account is your responsibility.</List.Item>
            </List>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>4. Platform Functionality</Title>
            <Paragraph>
                Comify allows registered Users to:
            </Paragraph>
            <List type='ordered'>
                <List.Item>View comics created by other Users through the Timeline and Explore pages.</List.Item>
                <List.Item>Follow other Users and view their comics in a Following feed.</List.Item>
                <List.Item>Create comics using the built-in editor and publish them to the platform.</List.Item>
                <List.Item>Like comics and reactions.</List.Item>
                <List.Item>Add reactions (comic-based or text-based) to comics and reactions.</List.Item>
                <List.Item>View notifications related to follows, likes, and reactions.</List.Item>
            </List>
            <Paragraph>
                All Content published on Comify is visible to registered Users only. Content is not accessible to non-registered visitors.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>5. User Content and Intellectual Property</Title>
            <List type='ordered'>
                <List.Item>You retain all intellectual property rights to the Content you create and publish on Comify.</List.Item>
                <List.Item>By publishing Content on Comify, you grant us a non-exclusive, worldwide, royalty-free license to host, store, display, reproduce, and distribute your Content solely for the purpose of operating, improving, and showcasing the Comify platform.</List.Item>
                <List.Item>We will not sell your Content or use it for third-party advertising.</List.Item>
                <List.Item>You confirm that you have the necessary rights to publish the Content you upload and that it does not infringe the rights of third parties.</List.Item>
            </List>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>6. Prohibited Use</Title>
            <Paragraph>
                You may not use Comify to:
            </Paragraph>
            <List type='ordered'>
                <List.Item>Violate any applicable laws or regulations.</List.Item>
                <List.Item>Upload Content that is unlawful, hateful, threatening, discriminatory, pornographic, or incites violence.</List.Item>
                <List.Item>Infringe intellectual property or privacy rights of others.</List.Item>
                <List.Item>Disrupt or interfere with the security or operation of the platform.</List.Item>
                <List.Item>Use automated systems to scrape or misuse the service.</List.Item>
            </List>
            <Paragraph>
                We reserve the right to remove Content or restrict Accounts that violate these rules.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>7. Account Suspension and Termination</Title>
            <List type='ordered'>
                <List.Item>You may stop using Comify at any time by logging out of your Account.</List.Item>
                <List.Item>At this stage, Account deletion is not available through self-service. You may request deletion by contacting us at comify@masking.tech.</List.Item>
                <List.Item>We may suspend or terminate Accounts that violate these Terms or applicable laws.</List.Item>
            </List>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>8. Availability and Maintenance</Title>
            <Paragraph>
                We aim to keep Comify available but do not guarantee uninterrupted access. We may
                perform maintenance or updates that temporarily affect availability.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>9. Liability</Title>
            <Paragraph>
                To the maximum extent permitted by law:
            </Paragraph>
            <List type='unordered'>
                <List.Item>Comify is provided “as is”.</List.Item>
                <List.Item>We are not liable for damages resulting from User Content or interactions between Users.</List.Item>
                <List.Item>We are not responsible for unauthorized access resulting from compromised login credentials.</List.Item>
            </List>
            <Paragraph>
                Nothing in these Terms limits liability where such limitation is not permitted by law.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>10. Changes to These Terms</Title>
            <Paragraph>
                We may update these Terms from time to time. Continued use of Comify after changes take effect constitutes acceptance of the updated Terms.
            </Paragraph>
        </Column>

        <Column gap='medium'>
            <Title size='medium'>11. Governing Law</Title>
            <Paragraph>
                These Terms are governed by the laws of the Netherlands.
            </Paragraph>
        </Column>

    </Column>;
}
