import { describe, it, expect } from 'vitest';
import { normalizeSector, SECTOR_NORMALIZATION_MAP } from '../sector-utils';

describe('normalizeSector', () => {
  it('handles null, undefined, and empty string', () => {
    expect(normalizeSector(null)).toBe('');
    expect(normalizeSector(undefined)).toBe('');
    expect(normalizeSector('')).toBe('');
    expect(normalizeSector('   ')).toBe('');
  });

  it('keeps clean single sectors untouched', () => {
    expect(normalizeSector('Software')).toBe('Software');
    expect(normalizeSector('Robotics')).toBe('Robotics');
    expect(normalizeSector('Cybersecurity')).toBe('Cybersecurity');
    expect(normalizeSector('Healthcare')).toBe('Healthcare');
    expect(normalizeSector('Semiconductors')).toBe('Semiconductors');
  });

  it('normalizes compound AI dual sectors by removing redundant AI prefix', () => {
    expect(normalizeSector('Artificial Intelligence / Developer Tools')).toBe('Developer Tools');
    expect(normalizeSector('Artificial Intelligence / Conversational AI')).toBe('Conversational AI');
    expect(normalizeSector('Artificial Intelligence / Product & Software')).toBe('Software');
    expect(normalizeSector('Artificial Intelligence / Image & Video')).toBe('Image & Video');
    expect(normalizeSector('Artificial Intelligence / Voice & Audio')).toBe('Voice & Audio');
    expect(normalizeSector('Artificial Intelligence / Content & Copywriting')).toBe('Content & Copywriting');
    expect(normalizeSector('Artificial Intelligence / Productivity & Search')).toBe('Productivity & Search');
    expect(normalizeSector('Artificial Intelligence / Healthcare & Biotech')).toBe('Healthcare & Biotech');
    expect(normalizeSector('Artificial Intelligence / Machine Learning Platforms')).toBe('Machine Learning Platforms');
  });

  it('normalizes compound industry dual sectors into single suitable sector', () => {
    expect(normalizeSector('Aerospace / Space Technology')).toBe('Aerospace Technology');
    expect(normalizeSector('Transportation/Trucking/Railroad')).toBe('Transportation');
    expect(normalizeSector('Materials Science / Deep Tech')).toBe('Materials Science');
    expect(normalizeSector('Robotics / Data Engineering')).toBe('Robotics');
    expect(normalizeSector('Fleet / Asset Management')).toBe('Fleet Management');
    expect(normalizeSector('Defense / GovTech')).toBe('Defense Technology');
    expect(normalizeSector('HR Tech / Recruiting')).toBe('HR Tech');
    expect(normalizeSector('Financial Services / Compliance')).toBe('Financial Services');
    expect(normalizeSector('Government / Public Sector')).toBe('Government Technology');
    expect(normalizeSector('Architecture / Energy')).toBe('Energy Technology');
    expect(normalizeSector('Productivity / Consumer Software')).toBe('Productivity Software');
    expect(normalizeSector('Cybersecurity / Fintech')).toBe('Cybersecurity');
    expect(normalizeSector('Chemicals / Life Sciences')).toBe('Biotechnology');
  });

  it('normalizes AI/ML variations', () => {
    expect(normalizeSector('AI/ML')).toBe('Artificial Intelligence');
    expect(normalizeSector('AI / ML')).toBe('Artificial Intelligence');
    expect(normalizeSector('AI/ML Platforms')).toBe('Machine Learning Platforms');
    expect(normalizeSector('ML / AI')).toBe('Artificial Intelligence');
  });

  it('handles arbitrary slash-separated pairs dynamically using fallback', () => {
    expect(normalizeSector('Artificial Intelligence / Legal Tech')).toBe('Legal Tech');
    expect(normalizeSector('AI / Autonomous Systems')).toBe('Autonomous Systems');
    expect(normalizeSector('Fintech / Artificial Intelligence')).toBe('Fintech');
  });
});
