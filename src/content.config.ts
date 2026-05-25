import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

const imoveis = defineCollection({
  loader: glob({ base: "./src/content/imoveis", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    priceLabel: z.string(),
    transactionType: z.enum(["venda", "aluguel"]),
    propertyType: z.string(),
    status: z.enum(["disponivel", "reservado", "vendido", "alugado"]),
    city: z.string(),
    neighborhood: z.string(),
    region: z.string(),
    address: z.string(),
    mapQuery: z.string(),
    contactName: z.string(),
    contactPhone: z.string(),
    whatsappNumber: z.string(),
    areaLabel: z.string().optional(),
    lotAreaLabel: z.string().optional(),
    bedrooms: z.number().int().nonnegative().default(0),
    bathrooms: z.number().int().nonnegative().default(0),
    parkingSpots: z.number().int().nonnegative().default(0),
    featured: z.boolean().default(false),
    highlights: z.array(z.string()).default([]),
    gallery: z.array(imageSchema).min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { imoveis };
