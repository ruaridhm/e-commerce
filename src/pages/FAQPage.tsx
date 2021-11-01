import FaqQuestion from '../components/FaqQuestion/FaqQuestion';
import Layout from '../components/Layout';

const FaqPage = () => {
  return (
    <Layout>
      <FaqQuestion
        question="I can't log into my account?"
        answer='You are not required to create an account when you make a subscription order. However, in order to manage your subscription preferences, you need to create an account with the same email provided during your order. Click here if you haven’t created an account yet. If you already have an account, log in below'
      />
      <FaqQuestion
        question='Can I skip my next order?'
        answer="Yes, log in to your account and click 'Manage my subscription' on the left hand side of your desktop or scroll down on your mobile. Click View details. Click Manage upcoming orders. Click Skip order for any upcoming orders you wouldn't like to receive."
      />
    </Layout>
  );
};

export default FaqPage;
