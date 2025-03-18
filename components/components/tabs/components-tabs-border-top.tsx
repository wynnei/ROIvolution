'use client';
import IconHome from '@/components/icon/icon-home';
import IconPhone from '@/components/icon/icon-phone';
import IconSettings from '@/components/icon/icon-settings';
import IconUser from '@/components/icon/icon-user';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';

const ComponentsTabsBorderTop = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <PanelCodeHighlight
            title="Boost Call Center ROI with AI"
           
        >
            <div className="mb-5">
                {isMounted && (
                    <Tab.Group>
                        <Tab.List className="mt-3 flex flex-wrap">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]' : ''}
                                                    ' flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                    >
                                        <IconHome className="ltr:mr-2 rtl:ml-2" />
                                        What is ROIvolution
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]' : ''}
                                                flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                    >
                                        <IconUser className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
                                        Hero Section
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]' : ''}
                                                flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                    >
                                        <IconPhone className="ltr:mr-2 rtl:ml-2" />
                                        Systen Overview 
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? '!border-secondary text-secondary !outline-none dark:bg-[#191e3a]' : ''}
                                                flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`}
                                    >
                                        <IconSettings className="h-5 w-5 ltr:mr-2 rtl:ml-2" />
                                        Get Started
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="h-screen w-full flex flex-col items-center justify-center text-center 
               bg-[url('/assets/images/auth/map.png')] bg-cover bg-center ">
                                    <h4 className="mb-4 text-3xl font-semibold">We move the world!</h4>
                                    <p className="mb-4 text-xl">
                                    ROIvolution is an advanced AI-powered ROI calculator designed specifically for call centers. 
                                    </p>
                                    <p className="mb-4 text-xl" >
                                    It helps businesses analyze cost savings, efficiency gains, and customer experience improvements through AI automation
                                    </p>
                                    <p className="mb-4 text-xl">
                                     It helps businesses analyze cost savings, efficiency gains, and customer experience improvements through AI automation
                                    </p>
                                    
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="h-screen w-full flex flex-col items-center justify-center text-center 
               bg-[url('/assets/images/auth/map.png')] bg-cover bg-center ">
                                    <div className="flex items-start pt-5">
                                        
                                        <div className="flex-auto">
                                            <h5 className="mb-4 text-3xl font-medium">Discover Your Potential Savings</h5>
                                            <p className="text-white-dark text-xl">
                                            See how much AI-powered automation can reduce costs and boost efficiency.
                                            </p>
                                            <p className="text-white-dark text-xl">
                                            Try the AI ROI Calculator Now
                                            </p>
                                            <p className="text-white-dark text-xl">
                                            No sign-up required. Get results in seconds!
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="h-screen w-full flex flex-col items-center justify-center text-center 
               bg-[url('/assets/images/auth/map.png')] bg-cover bg-center">
                                    
                                    <p className="text-white-dark text-xl">
                                    ROIvolution is an AI-powered tool designed to help call centers calculate their potential return on investment (ROI) from AI automation. 
                                    </p >
                                    <p className="text-white-dark text-xl">
                                     By inputting key operational data, users receive detailed cost savings estimates, efficiency improvements, and strategic insights.
                                    </p>
                                    <p className="mb-8 mt-8 text-3xl font-medium">
                                    Step-by-Step Breakdown
                                    </p>
                                    <p className="mb-4 text-2xl font-medium">
                                    Step 1: Input Your Call Center Data
                                    </p>
                                    <p className="text-white-dark text-xl">
                                    Users enter key metrics such as:
Current costs (e.g., staffing, call handling expenses)
Call volume & 
                                    </p>
                                    <p className="text-white-dark text-xl">
                                    handling time
AI implementation level (e.g., chatbot integration, voice AI, automation percentage)
                                    </p>
                                    <p className="mb-4 text-2xl font-medium">
                                    Step 2: AI-Driven Analysis & Calculation
                                    </p>
                                    <p className="text-white-dark text-xl">
                                    
Predict efficiency improvements (e.g., faster call resolution, improved customer experience).
Compare manual vs. AI-enhanced performance.
                                    </p>
                                    <p className="text-white-dark text-xl">
                                    The system applies AI-driven models to:
Estimate cost savings (e.g., reduced agent workload, lower operational expenses).

                                    </p>
                                    <p className="mb-4 text-2xl font-medium">
                                    Step 3: Get Instant ROI Insights
                                    </p>
                                    <p className="text-white-dark text-xl">
                                    Users receive a detailed report that includes:
Projected savings over time (monthly, yearly).

                                    </p>
                                    <p className="text-white-dark text-xl">
                                 
Efficiency gains & productivity improvements.
Breakdown of AI impact on different areas (e.g., cost per call reduction, customer satisfaction increase).
                                    </p>
                                    <p className="mb-4 text-2xl font-medium">
                                    Step 4: Make Data-Driven Decisions
                                    </p>
                                    <p className="text-white-dark text-xl ">
                                    Users can:
Adjust AI implementation levels to see different outcomes.
Download or share reports 
                                    </p>
                                    <p className="text-white-dark text-xl ">
                                    Users can:
for internal decision-making.
Take actionable steps toward AI adoption in their call center.
                                    </p>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="h-screen w-full flex flex-col items-center justify-center text-center 
               bg-[url('/assets/images/auth/map.png')] bg-cover bg-center">
                                    <div className="flex items-start">
                                        <p className="mb-4 text-3xl font-medium">
                                            The Time is NOW 
                                        </p>
                                    </div>
                                    <div>
                                    <Link href="/forms/form">
          <button className=" mt-4 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 
                             rounded-lg font-semibold transition-all duration-300">
            Get Started
          </button>
        </Link>
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                )}
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsTabsBorderTop;
