
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SuccessPage = () => {
  return (
    <>
      <Helmet>
        <title>Order Successful - DataCloud Solutions</title>
        <meta name="description" content="Your order has been successfully placed. Thank you for your purchase." />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="py-24 min-h-[60vh] flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="mb-8">
                <CheckCircle className="h-24 w-24 text-primary mx-auto" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Order successful
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Thank you for your purchase. Your order has been successfully placed and you will receive a confirmation email shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 active:scale-[0.98]">
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Back to home
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/services">
                    Continue exploring <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SuccessPage;
