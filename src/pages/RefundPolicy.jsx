import React from "react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* FIXED HEADER SPACE (prevents main header overlap) */}
      <div className="pt-16"></div>

      {/* PAGE HERO / HEADER */}
      <div className="w-full bg-[#0B2A45] py-12 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Refund Policy
          </h1>

          <div className="flex items-center text-sm mt-4 md:mt-0">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-orange-400 font-medium">Refund Policy</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-gray-500 text-sm mb-8">
          Last Updated: November 2025
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed text-lg">
          {/* Intro */}
          <section>
            <p>
              At <strong>KodeTri Technologies</strong>, we strive to deliver
              high-quality development, design, and consulting services.
              Software and development work involve planning, resources and time
              — therefore refunds are considered carefully and handled
              transparently. This Refund Policy outlines eligibility, process,
              and exceptions for refund requests.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              1. General Refund Guidelines
            </h2>
            <p>Refunds may be considered only when:</p>
            <ul className="list-disc pl-8 mt-3 space-y-2">
              <li>
                The project has not been started (no dev/design work initiated).
              </li>
              <li>
                No resources (developers/designers) have been allocated to the
                project.
              </li>
              <li>
                The refund request is submitted within{" "}
                <strong>72 hours (3 days)</strong> of payment.
              </li>
              <li>
                The cancellation reason is valid and approved by KodeTri
                management after review.
              </li>
            </ul>

            <p className="mt-3">
              Each refund request is evaluated on a case-by-case basis. Approval
              is not automatic.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              2. Situations Where Refunds Are Not Applicable
            </h2>
            <p>
              Refunds will generally not be issued in the following situations:
            </p>
            <ul className="list-disc pl-8 mt-3 space-y-2">
              <li>Work (development/design/planning) has commenced.</li>
              <li>
                Wireframes, mockups, prototypes, or code have been delivered to
                the client.
              </li>
              <li>
                Client has delayed the project by not providing required inputs
                or approvals.
              </li>
              <li>
                If project scope frequently changes or additional scope has been
                agreed and worked upon.
              </li>
              <li>
                Hosting, domain, plugins, licenses or third-party services have
                been purchased on client’s behalf.
              </li>
              <li>
                Final deliverables have been handed over or site has been
                deployed to production.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              3. Partial Refunds
            </h2>
            <p>In some cases a partial refund may be offered depending on:</p>
            <ul className="list-disc pl-8 mt-3 space-y-2">
              <li>Amount of work completed at the time of cancellation.</li>
              <li>Resources and hours invested by the team.</li>
              <li>
                Expenses incurred for third-party services, licenses or
                purchases.
              </li>
            </ul>
            <p className="mt-3">
              The partial refund amount will be calculated after assessing the
              work completed and non-recoverable costs.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              4. Refund Process & Timeline
            </h2>
            <p>To request a refund, follow these steps:</p>
            <ol className="list-decimal pl-8 mt-3 space-y-2">
              <li>
                Send a written request to{" "}
                <strong className="text-orange-500">
                  kodetri.tech@gmail.com
                </strong>{" "}
                with project details and payment proof.
              </li>
              <li>
                Our team will acknowledge receipt within{" "}
                <strong>3 business days</strong> and begin review.
              </li>
              <li>
                We may request additional information or clarification about the
                cancellation reason.
              </li>
              <li>
                Refund decisions are communicated within{" "}
                <strong>7–14 business days</strong> from the acknowledgement
                date.
              </li>
              <li>
                If approved, refunds are processed within{" "}
                <strong>7–14 business days</strong> using the original payment
                method where possible.
              </li>
            </ol>

            <p className="mt-3">
              Note: Bank processing times or third-party gateway rules may
              affect when the refunded amount appears in your account.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              5. Cancellations by KodeTri
            </h2>
            <p>
              We reserve the right to cancel projects in rare situations (e.g.,
              resource constraints, unforeseen circumstances). In such cases, we
              will:
            </p>
            <ul className="list-disc pl-8 mt-3 space-y-2">
              <li>Provide clear explanation for cancellation.</li>
              <li>
                Issue a pro-rated refund for unworked time and non-recoverable
                expenses.
              </li>
              <li>
                Assist in transferring any deliverables or code to the client.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              6. Dispute Resolution
            </h2>
            <p>
              If there is a disagreement about refund eligibility, we encourage
              clients to first reach out to our support team at
              <strong className="text-orange-500">
                {" "}
                kodetri.tech@gmail.com
              </strong>
              . We will attempt to resolve disputes amicably. If necessary,
              disputes may be escalated to mediation or arbitration per the
              governing laws specified in the service agreement.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              7. Exceptions & Special Cases
            </h2>
            <p>
              Certain project types or purchases may have a distinct refund
              policy (for example: training courses, workshops, or third-party
              license purchases). Such exceptions will be communicated clearly
              in proposals, invoices, or separate agreements.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              8. Third-Party Fees
            </h2>
            <p>
              Purchases made on behalf of the client (themes, plugins, licenses,
              hosting) are typically non-refundable. If refunds are available
              from the vendor, they will be handled according to the vendor’s
              policy and any recovered amount will be credited back to the
              client after deduction of any fees.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              9. Change Requests & Scope Revisions
            </h2>
            <p>
              Requests to change project scope after work has started may impact
              timelines and pricing. These are handled through formal change
              requests, and refunds will not be issued for completed work
              covering previous scope.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              10. Contact & Support
            </h2>
            <p>
              To request refunds, ask questions, or escalate concerns, please
              contact:
            </p>
            <p className="mt-3">
              <strong className="text-orange-500">
                kodetri.tech@gmail.com
              </strong>
              <br />
              Phone: <strong>+91 98765 43210</strong>
            </p>
          </section>

          {/* Closing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Effective Date
            </h2>
            <p>
              This policy is effective as of November 2025 and may be updated
              from time to time. Continued use of our services indicates
              acceptance of the latest policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
