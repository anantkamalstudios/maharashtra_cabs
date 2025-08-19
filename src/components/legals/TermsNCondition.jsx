import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const TermsNCondition = () => {
  return (
    <Layout headerStyle={1}>
      <div className="bg-shape mt-115">
        <div className="card shadow-sm border-0">
          <div className="card-body p-4">
            <h1 className="mb-4 text-center text-primary">
              Terms &amp; Conditions
            </h1>
            <p className="lead mb-4">
              Welcome to Maharashtra Cabs! By booking a cab or car rental
              service with us, you agree to the following terms and conditions.
              Please read them carefully before using our services.
            </p>

            <h4 className="mt-4 mb-2">1. Service Overview</h4>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                Maharashtra Cabs provides cab and car rental services for local,
                outstation, and airport transfers.
              </li>
              <li className="list-group-item">
                Bookings can be made via our website or directly through
                WhatsApp for your convenience.
              </li>
            </ul>

            <h4 className="mt-4 mb-2">2. Booking &amp; Confirmation</h4>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                All bookings are subject to availability and confirmation.
              </li>
              <li className="list-group-item">
                You will receive a confirmation via WhatsApp or email after
                successful booking.
              </li>
              <li className="list-group-item">
                Please ensure your contact details are correct for timely
                communication.
              </li>
            </ul>

            <h4 className="mt-4 mb-2">3. Payment Terms</h4>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                Fares are calculated based on distance, time, and vehicle type.
              </li>
              <li className="list-group-item">
                Advance payment may be required for certain bookings. Payment
                details will be shared via WhatsApp or email.
              </li>
              <li className="list-group-item">
                We accept UPI, bank transfer, and cash payments.
              </li>
            </ul>

            <h4 className="mt-4 mb-2">4. Cancellation &amp; Refund</h4>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                Cancellations must be made at least 2 hours before the scheduled
                pickup time.
              </li>
              <li className="list-group-item">
                Refunds (if applicable) will be processed within 5-7 business
                days.
              </li>
              <li className="list-group-item">
                For detailed policy, please refer to our{" "}
                <Link
                  to="/legals/CancellationPolicy"
                  className="text-decoration-underline text-primary"
                >
                  Cancellation Policy
                </Link>
                .
              </li>
            </ul>

            <h4 className="mt-4 mb-2">5. User Responsibilities</h4>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                Provide accurate pickup and drop details.
              </li>
              <li className="list-group-item">
                Treat drivers and vehicles with respect.
              </li>
              <li className="list-group-item">
                Any damage to the vehicle caused by the user will be chargeable.
              </li>
            </ul>

            <h4 className="mt-4 mb-2">6. WhatsApp Communication</h4>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                We use WhatsApp for quick booking, support, and updates. By
                booking, you consent to receive messages from us.
              </li>
              <li className="list-group-item">
                Your privacy is important. We do not share your WhatsApp number
                with third parties.
              </li>
            </ul>

            <h4 className="mt-4 mb-2">7. Limitation of Liability</h4>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                Maharashtra Cabs is not liable for delays due to traffic,
                weather, or unforeseen circumstances.
              </li>
              <li className="list-group-item">
                We are not responsible for loss of personal belongings during
                the ride.
              </li>
            </ul>

            <h4 className="mt-4 mb-2">8. Changes to Terms</h4>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                We reserve the right to update these terms at any time. Changes
                will be posted on our website.
              </li>
            </ul>

            <div className="alert alert-info mt-4" role="alert">
              For any queries or support, contact us on WhatsApp at{" "}
              <a
                href="https://wa.me/919999999999"
                className="fw-bold text-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91-99999 99999
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsNCondition;
