import React from 'react';
import { X, Check, Camera, RefreshCw } from 'lucide-react';
import { PHOTO_PRESETS, DEFAULT_LAWYER_PHOTOS } from '../data/siteData';

export const PhotoCustomizerModal = ({
  isOpen,
  onClose,
  photos,
  setPhotos,
}) => {
  if (!isOpen) return null;

  const handleSelectPreset = (targetKey, url) => {
    setPhotos((prev) => ({
      ...prev,
      [targetKey]: url,
    }));
  };

  const handleReset = () => {
    setPhotos(DEFAULT_LAWYER_PHOTOS);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 relative shadow-2xl space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-[#0F294A]">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Galeria &amp; Fotos de Dr. Tales
              </h3>
              <p className="text-xs text-slate-500">
                Selecione qual fotografia você prefere ver no destaque principal.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Escolha da Foto Principal (Hero) */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Foto do Destaque Principal (Início):
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PHOTO_PRESETS.map((preset) => {
              const isSelected = photos.hero === preset.url;
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset('hero', preset.url)}
                  className={`group relative rounded-xl overflow-hidden border p-1 text-left transition-all ${
                    isSelected
                      ? 'border-[#0284C7] bg-sky-50 ring-2 ring-[#0284C7]/20 shadow-sm'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-100 mb-2">
                    <img
                      src={preset.url}
                      alt={preset.label}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-700 line-clamp-1 block px-1">
                    {preset.label}
                  </span>
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#0F294A] text-white flex items-center justify-center shadow">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors font-medium"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restaurar padrão</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#0F294A] to-[#1E3A8A] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
};
