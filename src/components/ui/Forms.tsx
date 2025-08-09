import { useState, type ChangeEvent, type FormEvent } from "react"

type FormField = {
  id: keyof FormData
  label: string
  type: string
  placeholder: string
  required?: boolean
}

type FormData = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
}

type ContactFormProps = {
  onSubmit?: (data: FormData) => void
  className?: string
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
}

export default function Form ({ onSubmit, className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    message: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleBlur = (field: keyof FormData) => {
    setTouched({
      ...touched,
      [field]: true,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched for validation
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        return { ...acc, [key]: true }
      },
      {} as Record<keyof FormData, boolean>,
    )

    setTouched(allTouched)

    // Check if form is valid
    const isValid = formFields.filter((field) => field.required).every((field) => formData[field.id].trim() !== "")

    if (isValid) {
      onSubmit?.(formData)
      // console.log("Form submitted:", formData)
    }
  }

  const formFields: FormField[] = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      required: true,
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "example@mail.com",
      required: true,
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "tel",
      placeholder: "+1(555) 000-0000",
    },
  ]

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-2xl mx-auto ${className}`}>
      <div className="space-y-6">
        <div className="grid grid-cols- 1 md:grid-cols-2 gap-4">
          {formFields.slice(0, 2).map((field) => (
            <FormInput
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleChange}
              onBlur={() => handleBlur(field.id)}
              required={field.required}
              isInvalid={touched[field.id] && field.required && !formData[field.id].trim()}
            />
          ))}
        </div>

        <div className="space-y-4">
          {formFields.slice(2).map((field) => (
            <FormInput
              key={field.id}
              id={field.id}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleChange}
              onBlur={() => handleBlur(field.id)}
              required={field.required}
              isInvalid={touched[field.id] && field.required && !formData[field.id].trim()}
            />
          ))}

          <FormTextarea
            id="message"
            label="Message"
            placeholder="Your message to us."
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur("message")}
            required
            isInvalid={touched.message && !formData.message.trim()}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-black hover:bg-gray-700 text-white font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

type FormInputProps = {
  id: string
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: () => void
  required?: boolean
  isInvalid?: boolean
}

function FormInput({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  required = false,
  isInvalid = false,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 transition-all duration-200 ${
          isInvalid
            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
        }`}
      />
      {isInvalid && <p className="mt-1 text-sm text-red-600">This field is required</p>}
    </div>
  )
}

type FormTextareaProps = {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur: () => void
  required?: boolean
  isInvalid?: boolean
}

function FormTextarea({
  id,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  required = false,
  isInvalid = false,
}: FormTextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        rows={4}
        className={`px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 transition-all duration-200 ${
          isInvalid
            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
        }`}
      />
      {isInvalid && <p className="mt-1 text-sm text-red-600">This field is required</p>}
    </div>
  )
}

