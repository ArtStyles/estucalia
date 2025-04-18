"use client";

import { FC } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

interface IDocumento {
    nombre: string;
    accion: string;
    enlace?: string;
}

interface IProducto {
    nombre: string;
    subtitulo?: string;
    imagen?: string;

    composicion?: string;
    caracteristicas?: string[];
    recomendaciones?: string[];
    precauciones?: string[];
    informacion_relevante?: string[];
    informacion_general?: string;
    aplicacion?: string[]; // If you use an array of strings
    documentacion?: IDocumento[];
}

interface ProductDetailProps {
    product: IProducto;
}

export const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
    const { t } = useLanguage();

    return (
        <div className="flex gap-12">
            <div className="flex-1 w-3/4">
                <h3 className="text-xl font-semibold">{product.nombre}</h3>
                {product.subtitulo && (
                    <h4 className="text-base italic mb-4">{product.subtitulo}</h4>
                )}

                {product.composicion && (
                    <p>
                        <strong>{t("productsSection.composition")}:</strong> {product.composicion}
                    </p>
                )}

                {product.caracteristicas && product.caracteristicas.length > 0 && (
                    <div className="my-4">
                        <strong>{t("productsSection.features")}:</strong>
                        <ul className="list-disc ml-5">
                            {product.caracteristicas.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {product.recomendaciones && product.recomendaciones.length > 0 && (
                    <div className="my-4">
                        <strong>{t("productsSection.recommendations")}:</strong>
                        <ul className="list-disc ml-5">
                            {product.recomendaciones.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {product.aplicacion && product.aplicacion.length > 0 && (
                    <div className="my-4">
                        <strong>{t("productsSection.application")}:</strong>
                        <ul className="list-disc ml-5">
                            {product.aplicacion.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {product.precauciones && product.precauciones.length > 0 && (
                    <div className="my-4">
                        <strong>{t("productsSection.cautions")}:</strong>
                        <ul className="list-disc ml-5">
                            {product.precauciones.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {product.informacion_relevante && product.informacion_relevante.length > 0 && (
                    <div className="my-4">
                        <strong>{t("productsSection.relevantInfo")}:</strong>
                        <ul className="list-disc ml-5">
                            {product.informacion_relevante.map((info, i) => (
                                <li key={i}>{info}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {product.informacion_general && (
                    <p className="my-2">{product.informacion_general}</p>
                )}
            </div>

            {/* Documentation (if it exists) */}
            {product.documentacion && product.documentacion.length > 0 && (
                <div className="my-4 w-1/4">
                    <Image
                        src={product.imagen || "/images/no-image.png"}
                        alt={product.nombre}
                        width={180}
                        height={180}
                    />

                    <ul className="list-none ml-5">
                        <li>
                            <strong>{t("productsSection.documentation")}:</strong>
                        </li>
                        {product.documentacion.map((doc, i) => (
                            <li key={i} className="flex items-center justify-between gap-2">
                                <span>{doc.nombre}</span>
                                <a
                                    href={doc.enlace || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline"
                                >
                                    {doc.accion || "Descargar"}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
