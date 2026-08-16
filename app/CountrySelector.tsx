"use client";

import { useState, useMemo } from 'react';
import resellersData from './resellers.json';

const COUNTRIES = [
  { code: 'us', name: 'USA', flag: '/image/us.png' },
  { code: 'ar', name: 'Argentina', flag: '/image/ar.png' },
  { code: 'ec', name: 'Ecuador', flag: '/image/ec.png' },
  { code: 'co', name: 'Colombia', flag: '/image/co.png' },
  { code: 'mx', name: 'México' },
  { code: 'bo', name: 'Bolivia' },
  { code: 'es', name: 'España' },
  { code: 'do', name: 'República Dominicana' },
  { code: 'cl', name: 'Chile' },
  { code: 've', name: 'Venezuela' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'hn', name: 'Honduras' },
  { code: 'cr', name: 'Costa Rica' },
  { code: 'pe', name: 'Perú' },
  { code: 'ni', name: 'Nicaragua' },
  { code: 'pr', name: 'Puerto Rico' },
  { code: 'pt', name: 'Portugal' },
  { code: 'ca', name: 'Canadá' },
  { code: 'py', name: 'Paraguay' },
  { code: 'sv', name: 'El Salvador' },
  { code: 'gt', name: 'Guatemala' },
  { code: 'uy', name: 'Uruguay' },
  { code: 'br', name: 'Brasil' },
  { code: 'pa', name: 'Panamá' },
  { code: 'cu', name: 'Cuba' },
  { code: 'other', name: 'Otro' }
];

export default function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState('co');

  const selectedCountry = COUNTRIES.find(c => c.code === selectedCode);
  
  const filteredResellers = useMemo(() => {
    return resellersData.filter(r => r.countryCode === selectedCode);
  }, [selectedCode]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-[34px]">
      <div className="bg-[#1a1f2e] border border-[#3b82f6] rounded-lg p-6 md:p-8 shadow-lg">
        {/* Dropdown Input */}
        <div className="relative mb-6">
          <div 
            className="relative cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-full px-4 py-3 bg-[#2a2f3e] border border-[#3b82f6]/30 rounded-lg text-white transition-colors text-sm md:text-base pr-10 flex items-center">
              {selectedCountry ? selectedCountry.name : 'Elija su país'}
            </div>
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
              <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid of Countries (Shows when open) */}
        {isOpen && (
          <div className="grid md:grid-cols-4 gap-3 mb-8">
            {COUNTRIES.map((country) => (
              <div 
                key={country.code}
                onClick={() => {
                  setSelectedCode(country.code);
                  setIsOpen(false);
                }}
                className={`cursor-pointer p-2 md:p-3 transition-colors text-sm md:text-base flex items-center gap-3 border-b border-gray-600/30 text-white hover:text-[#ff9501] ${selectedCode === country.code ? 'bg-white/5 rounded-lg' : ''}`}
              >
                {country.flag && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={country.flag} alt={country.name} className="w-8 h-6 object-cover rounded" />
                )}
                <span>{country.name} {['us', 'ar', 'ec', 'co'].includes(country.code) && <span> 🔥</span>}</span>
              </div>
            ))}
          </div>
        )}

        {/* Resellers Table */}
        <div className="mt-4 bg-black rounded-lg border border-[#1A1E21] overflow-hidden">
          <div className="p-4 border-b border-[#1A1E21]">
            <h3 className="text-[#ff9501] font-medium text-sm md:text-base">
              ¿Tarjeta, transferencia o cripto? Elige un distribuidor a tu medida.
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base text-white">
              <thead className="bg-[#1A1E21]">
                <tr>
                  <th className="px-4 py-3 font-semibold">País</th>
                  <th className="px-4 py-3 font-semibold">Revendedor</th>
                  <th className="px-4 py-3 font-semibold">Formas de pago</th>
                  <th className="px-4 py-3 font-semibold text-center">Contacto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1E21]">
                {filteredResellers.length > 0 ? (
                  filteredResellers.map((reseller, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          {selectedCountry?.flag && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-6 h-4 object-cover rounded" />
                          )}
                          {selectedCountry?.name}
                        </div>
                      </td>
                      <td className="px-4 py-4">{reseller.name}</td>
                      <td className="px-4 py-4 text-gray-300 text-sm max-w-xs">{reseller.payType}</td>
                      <td className="px-4 py-4 text-center">
                        {reseller.whatsapp && (
                          <a href={reseller.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                            </svg>
                          </a>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-gray-400">
                      Sin resultados
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
