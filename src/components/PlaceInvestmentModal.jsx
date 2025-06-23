import React, { useState } from 'react'
import { X } from 'lucide-react'

const PlaceInvestmentModal = ({ onClose, name }) => {
  const [amount, setAmount] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    alert(`Investment of $${amount} sent to ${name}`)
    onClose()
  }
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800/90 border border-slate-700 rounded-xl w-full max-w-md shadow-2xl p-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Place Investment</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-300 mb-1">Investment Amount (USD)</label>
            <input
              type="number"
              min="1"
              step="any"
              className="w-full bg-slate-700 text-white rounded-lg px-3 py-2"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold"
          >
            Send Investment
          </button>
        </form>
      </div>
    </div>
  )
}

export default PlaceInvestmentModal
