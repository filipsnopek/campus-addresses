import { FocusPageLayout, HeroTitle } from '@design-system';
import { LandingPage } from './landing/useCases/LandingPage';
import { AddressesPage } from './addresses/useCases/AddressesPage';

export const routes = [
    {
        index: true,
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/addresses',
        element: <AddressesPage />,
    },
    {
        path: '*',
        element: (
            <FocusPageLayout>
                <HeroTitle title="Page not found" disabled />
            </FocusPageLayout>
        ),
    },
];
