import React from 'react'
import MorphingText from '@/components/ui/morphing-text'

function Loading() {
    const texts = [
        "Loading",
        "Chargement",
        "Cargando",
        "Laden",
        "Carregando",
        "读取中",
        "Загрузка",
        "読み込み中",
        "Caricamento",
        "Učitavanje",
        "İndiriliyor",
        "Yükleniyor",
        "Betöltés",
        "로드 중",
        "Wczytywanie",
    ];
    return (
        <div className="h-dvh w-full flex justify-center items-center">
            <MorphingText texts={texts} className='text-5xl' />
        </div>
    )
}

export default Loading