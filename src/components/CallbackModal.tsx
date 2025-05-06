import React, { useState } from 'react';
import { X } from 'lucide-react';

const SERVER_URL = 'https://tajhotelsdemo.onrender.com';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  carModel: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  carModel?: string;
}

const carModelOptions = [
  'TUCSON',
  'EXTER',
  'CRETA',
  'VERNA',
  'ALCAZAR',
  'i20',
  'AURA',
];

const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    carModel: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitized = name === 'phoneNumber' ? value.replace(/\D/g, '') : value;
    setFormData((prev) => ({ ...prev, [name]: sanitized }));
  };

  const validateForm = () => {
    const errs: FormErrors = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!/^\d{10}$/.test(formData.phoneNumber))
      errs.phoneNumber = 'Enter a valid 10-digit number';
    if (!formData.carModel.trim()) errs.carModel = 'Car model is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      ...formData,
      phoneNumber: `+91${formData.phoneNumber}`,
    };

    try {
      const response = await fetch(`${SERVER_URL}/outbound-call-tata-motors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw await response.json();

      setSubmitted(true);
      setFormData({ fullName: '', phoneNumber: '', carModel: '' });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 4000);
    } catch (err) {
      console.error('Submission failed:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Request a Callback</h2>
            <button onClick={onClose} className="text-neutral-500 hover:text-neutral-700">
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-sm">
                  +91
                </span>
                <input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder="10 digits"
                  className="flex-1 border border-gray-300 rounded-r-md px-4 py-2 text-sm"
                />
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Car Model Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Model</label>
              <select
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              >
                <option value="">Select a model</option>
                {carModelOptions.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              {errors.carModel && <p className="text-red-500 text-xs mt-1">{errors.carModel}</p>}
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallbackModal;
