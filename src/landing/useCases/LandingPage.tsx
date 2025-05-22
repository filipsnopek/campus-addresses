import { FocusPageLayout, HeroTitle, MainMenu } from '@design-system';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <FocusPageLayout>
            <HeroTitle title="Campus" />
            <MainMenu>
                <MainMenu.Item>
                    <Link to="/contacts">Contacts</Link>
                </MainMenu.Item>
                <MainMenu.Item>
                    <Link to="/information">Information</Link>
                </MainMenu.Item>
                <MainMenu.Item>
                    <Link to="/addresses">Campus Addresses</Link>
                </MainMenu.Item>
            </MainMenu>
        </FocusPageLayout>
    );
};
