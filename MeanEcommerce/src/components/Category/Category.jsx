import React from 'react'

export default function Category({ card = [] }) {
    return (
        <div>
            {card.map((card) => {
                return (
                    <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                        {card}
                    </button>
                )
            })}

        </div>
    )
}
