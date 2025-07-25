

import React from 'react';
import { NEWS_ARTICLES } from '../constants';
import { NewsArticle } from '../types';

const IvDripIcon = () => <svg className="w-14 h-14 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 14v5a2 2 0 002 2h4a2 2 0 002-2v-5M12 14V4m0 0L9 7m3-3l3 3m-8 7h10" /></svg>;
const HealthReportIcon = () => <svg className="w-14 h-14 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const LabTestIcon = () => <svg className="w-14 h-14 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 3v2m6-2v2" /></svg>;

const NEWS_ICONS: { [key: string]: React.FC } = {
  'iv-drip': IvDripIcon,
  'health-report': HealthReportIcon,
  'lab-test': LabTestIcon,
};


const ArrowRightIcon = () => <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>;

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
    const Icon = NEWS_ICONS[article.icon];
    return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
        <div className="h-48 bg-gray-100 flex items-center justify-center">
             {Icon && <Icon />}
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <p className="text-sm text-gray-500 mb-4">Mounty Health Center Provides Complete Doctor Services: Vaccinations, STD & Blood Tests, Medications & IV Drips.</p>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex-grow">{article.title}</h3>
            <span className="font-semibold text-cyan-600 flex items-center self-start mt-4 opacity-50 cursor-not-allowed">
                READ MORE <ArrowRightIcon />
            </span>
            <div className="border-t mt-4 pt-4 text-sm text-gray-400">
                {article.date}
            </div>
        </div>
    </div>
)};

const LatestNews = (): React.ReactNode => {
    return (
        <section id="latest-news" className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-cyan-800 mb-4">LATEST NEWS</h2>
                    <p className="text-lg text-gray-600">
                        Stay updated with the latest updates and insights from Mounty Health Center. Feel free to ask questions in the comments for any health topics you find interesting.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {NEWS_ARTICLES.map(article => (
                        <NewsCard key={article.title} article={article} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;