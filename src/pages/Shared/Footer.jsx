import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 pt-40 py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Bistro Boss Branding */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Bistro Boss</h2>
          <p className="text-gray-400">
            Your favorite spot for delicious, freshly prepared meals. We offer
            the finest dining experience with a touch of elegance.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul>
            <li className="mb-2 flex items-center">
              <span className="material-icons mr-2">location_on</span>
              123 Culinary Street, Flavor Town
            </li>
            <li className="mb-2 flex items-center">
              <span className="material-icons mr-2">phone</span>
              (123) 456-7890
            </li>
            <li className="mb-2 flex items-center">
              <span className="material-icons mr-2">email</span>
              support@bistroboss.com
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        © 2024 Bistro Boss. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
