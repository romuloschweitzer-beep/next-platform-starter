import { FeedbackForm } from 'components/feedback-form';
import { Markdown } from 'components/markdown';

export const metadata = {
    title: 'Classics'
};

const explainer = `
oi
`;

export default async function Page() {
    return (
        <>
            <h1 className="mb-8">Netlify Classics</h1>
            <Markdown content={explainer} className="mb-12" />
            <div className="flex justify-center">
                <FeedbackForm />
            </div>
        </>
    );
}
