import React, { useState } from 'react';
import { Search, Sparkles, Award, Eye, X, BookOpen, Zap, Diamond } from 'lucide-react';

import quartzJpg from '../assets/quartz.jpg';
import feldsparJpg from '../assets/feldspar.jpg';
import calciteJpg from '../assets/calcite.jpg';
import goldJpg from '../assets/gold.jpg';
import pyriteJpg from '../assets/pyrite.jpg';
import micaJpg from '../assets/mica.jpg';
import lithiumJpg from '../assets/lithium.jpg';
import coalJpg from '../assets/coal.jpg';

interface Mineral {
  id: string;
  name: string;
  image: string;
  properties: string[];
  chemicalComposition: string;
  uses: string[];
  commonRocks: string[];
  rarity: 'common' | 'uncommon' | 'rare';
  funFact: string;
  difficulty: number;
}

const mineralData: Mineral[] = [
  {
    id: 'quartz',
    name: 'Quartz',
    image: quartzJpg,
    properties: [
      'Hardness: 7 (Mohs)',
      'Luster: Vitreous',
      'Streak: White',
      'Crystal System: Trigonal'
    ],
    chemicalComposition: 'SiO₂ (Silicon Dioxide)',
    uses: [
      'Gemstone (Amethyst, Citrine)',
      'Electronics (oscillators)',
      'Glass manufacturing',
      'Abrasives'
    ],
    commonRocks: [
      'Igneous (Granite, Rhyolite)',
      'Metamorphic (Gneiss, Schist)',
      'Sedimentary (Sandstone)'
    ],
    rarity: 'common',
    funFact: 'Quartz crystals can generate electricity when pressure is applied - this is called the piezoelectric effect!',
    difficulty: 1
  },
  {
    id: 'feldspar',
    name: 'Feldspar',
    image: feldsparJpg,
    properties: [
      'Hardness: 6-6.5 (Mohs)',
      'Luster: Vitreous to pearly',
      'Streak: White',
      'Crystal System: Monoclinic or Triclinic'
    ],
    chemicalComposition: 'KAlSi₃O₈ (Orthoclase), NaAlSi₃O₈ (Albite), CaAl₂Si₂O₈ (Anorthite)',
    uses: [
      'Ceramics and glass manufacturing',
      'Building materials',
      'Gemstone (Moonstone, Labradorite)'
    ],
    commonRocks: [
      'Igneous (Granite, Basalt)',
      'Metamorphic (Gneiss, Schist)',
      'Sedimentary (Arkose)'
    ],
    rarity: 'common',
    funFact: 'Feldspar makes up about 60% of the Earth\'s crust - it\'s literally everywhere beneath your feet!',
    difficulty: 2
  },
  {
    id: 'calcite',
    name: 'Calcite',
    image: calciteJpg,
    properties: [
      'Hardness: 3 (Mohs)',
      'Luster: Vitreous to dull',
      'Streak: White',
      'Crystal System: Hexagonal (Trigonal)'
    ],
    chemicalComposition: 'CaCO₃ (Calcium Carbonate)',
    uses: [
      'Construction (limestone, marble)',
      'Agricultural soil treatment',
      'Optical instruments (Iceland Spar)',
      'Antacids'
    ],
    commonRocks: [
      'Sedimentary (Limestone, Chalk, Marble)',
      'Metamorphic (Marble)'
    ],
    rarity: 'common',
    funFact: 'Iceland Spar calcite creates double images - Vikings used it as a navigation tool to find the sun on cloudy days!',
    difficulty: 2
  },
  {
    id: 'gold',
    name: 'Gold',
    image: goldJpg,
    properties: [
      'Hardness: 2.5-3 (Mohs)',
      'Luster: Metallic',
      'Streak: Shining yellow',
      'Crystal System: Isometric'
    ],
    chemicalComposition: 'Au',
    uses: [
      'Jewelry and adornments',
      'Electronics',
      'Dentistry',
      'Aerospace'
    ],
    commonRocks: [
      'Igneous (Granite, Diorite, Rhyolite)',
      'Metamorphic (Schist, Greenstone)',
      'Sulfide minerals (Pyrite, Arsenopyrite, Chalcopyrite)',
      'Placer deposits'
    ],
    rarity: 'rare',
    funFact: 'All the gold ever mined in human history could fit into just three Olympic-sized swimming pools!',
    difficulty: 4
  },
  {
    id: 'pyrite',
    name: 'Pyrite',
    image: pyriteJpg,
    properties: [
      'Hardness: 6-6.5 (Mohs)',
      'Luster: Metallic',
      'Streak: Greenish-black',
      'Crystal System: Isometric'
    ],
    chemicalComposition: 'FeS₂ (Iron Sulfide)',
    uses: [
      'Production of sulfur and sulfuric acid',
      'Gold ore',
      'Jewelry',
      'Iron sulfate production'
    ],
    commonRocks: [
      'Sedimentary (Shale, Sandstone, Limestone)',
      'Igneous rocks',
      'Metamorphic rocks',
      'Hydrothermal veins',
      'Coal beds'
    ],
    rarity: 'uncommon',
    funFact: 'Known as "Fool\'s Gold", pyrite can actually spark when struck against steel - perfect for starting fires!',
    difficulty: 3
  },
  {
    id: 'mica',
    name: 'Mica',
    image: micaJpg,
    properties: [
      'Hardness: 2.5-4 (Mohs)',
      'Luster: Pearly or vitreous',
      'Streak: White',
      'Crystal System: Monoclinic'
    ],
    chemicalComposition: 'XY₂(Al,Si)₄O₁₀(F,OH)₂',
    uses: [
      'Electrical and electronics',
      'Construction and manufacturing',
      'Cosmetics',
      'Automotive industry'
    ],
    commonRocks: [
      'Igneous (Granite, Pegmatite, Syenite)',
      'Metamorphic (Schist, Gneiss)',
      'Sedimentary rocks'
    ],
    rarity: 'common',
    funFact: 'Mica sheets are so thin they were once used as windows in medieval times - and they\'re still used in microwave oven windows today!',
    difficulty: 2
  },
  {
    id: 'lithium',
    name: 'Lithium',
    image: lithiumJpg,
    properties: [
      'Hardness: 0.6 (Mohs)',
      'Luster: Silvery-white',
      'Streak: White',
      'Crystal System: Body-centered cubic'
    ],
    chemicalComposition: 'Li',
    uses: [
      'Batteries',
      'Ceramics and glass',
      'Lubricating greases',
      'Alloys'
    ],
    commonRocks: [
      'Hard rock deposits (Spodumene, Petalite, Lepidolite, Amblygonite)',
      'Brine deposits',
      'Sedimentary rocks'
    ],
    rarity: 'uncommon',
    funFact: 'Lithium is so light it floats on water, and it powers everything from your phone to electric cars!',
    difficulty: 3
  },
  {
    id: 'coal',
    name: 'Coal',
    image: coalJpg,
    properties: [
      'Color: Brownish-black to black',
      'Hardness: Soft to hard',
      'Luster: Dull to shiny',
      'Note: Coal is a sedimentary rock, not a mineral.'
    ],
    chemicalComposition: 'Carbon, Hydrogen, Oxygen, Nitrogen, Sulfur',
    uses: [
      'Electricity generation',
      'Steel production',
      'Industrial processes',
      'Gasification and liquefaction'
    ],
    commonRocks: [
      'Found in coal seams interbedded with other sedimentary rocks like shale and sandstone.'
    ],
    rarity: 'common',
    funFact: 'Coal formed from ancient forests that existed 300 million years ago - you\'re literally looking at prehistoric plants!',
    difficulty: 1
  }
];

const MineralList: React.FC = () => {
  const [selectedMineral, setSelectedMineral] = useState<Mineral | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [discoveredMinerals, setDiscoveredMinerals] = useState<Set<string>>(new Set());
  const [filterRarity, setFilterRarity] = useState<'all' | 'common' | 'uncommon' | 'rare'>('all');
  const [activeTab, setActiveTab] = useState<'overview' | 'properties' | 'uses' | 'fun'>('overview');

  const filteredMinerals = mineralData.filter(mineral => {
    const matchesSearch = mineral.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = filterRarity === 'all' || mineral.rarity === filterRarity;
    return matchesSearch && matchesRarity;
  });

  const openModal = (mineral: Mineral) => {
    setSelectedMineral(mineral);
    setDiscoveredMinerals(prev => new Set([...prev, mineral.id]));
  };

  const closeModal = () => {
    setSelectedMineral(null);
    setActiveTab('overview');
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-green-100 text-green-800';
      case 'uncommon': return 'bg-blue-100 text-blue-800';
      case 'rare': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'common': return <BookOpen className="w-4 h-4" />;
      case 'uncommon': return <Eye className="w-4 h-4" />;
      case 'rare': return <Diamond className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const progressPercentage = (discoveredMinerals.size / mineralData.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/20 to-pink-50/20"></div>
        <div className="relative px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-purple-600 mr-4 animate-pulse" />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mineral Explorer
              </h1>
              <Sparkles className="w-12 h-12 text-pink-600 ml-4 animate-pulse" />
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Embark on an epic journey through Earth's geological treasures! Discover, learn, and collect minerals 
              from around the world. Each discovery brings you closer to becoming a master mineralogist!
            </p>
            
            {/* Progress Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-700 font-medium">Discovery Progress</span>
                <span className="text-purple-700 font-bold">{discoveredMinerals.size}/{mineralData.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-center mt-2">
                <Award className="w-4 h-4 text-yellow-600 mr-1" />
                <span className="text-sm text-yellow-600 font-medium">
                  {progressPercentage === 100 ? 'Master Mineralogist!' : 
                   progressPercentage >= 75 ? 'Expert Explorer!' :
                   progressPercentage >= 50 ? 'Skilled Collector!' :
                   progressPercentage >= 25 ? 'Apprentice Seeker!' : 'New Explorer!'}
                </span>
              </div>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-100 backdrop-blur-lg rounded-2xl p-6 border border-gray-300">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search minerals..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <select
                  value={filterRarity}
                  onChange={(e) => setFilterRarity(e.target.value as any)}
                  className="px-4 py-3 bg-white border border-gray-300 rounded-xl text-black focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="all">All Rarities</option>
                  <option value="common">Common</option>
                  <option value="uncommon">Uncommon</option>
                  <option value="rare">Rare</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mineral Grid */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMinerals.map((mineral) => (
            <div 
              key={mineral.id} 
              className={`group relative bg-gray-50 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-300 transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-purple-300/25 ${ 
                discoveredMinerals.has(mineral.id) ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => openModal(mineral)}
            >
              <div className="relative">
                <img 
                  src={mineral.image} 
                  alt={mineral.name} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getRarityColor(mineral.rarity)}`}>
                    {getRarityIcon(mineral.rarity)}
                    {mineral.rarity}
                  </div>
                </div>
                {discoveredMinerals.has(mineral.id) && (
                  <div className="absolute top-3 left-3">
                    <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Discovered
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-purple-600 transition-colors">
                  {mineral.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{mineral.chemicalComposition}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${ 
                          i < mineral.difficulty ? 'bg-yellow-400' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <Zap className="w-5 h-5 text-purple-600 group-hover:text-yellow-400 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMineral && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-300">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-300">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-black">{selectedMineral.name}</h2>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getRarityColor(selectedMineral.rarity)}`}>
                      {getRarityIcon(selectedMineral.rarity)}
                      {selectedMineral.rarity}
                    </div>
                  </div>
                  <p className="text-purple-700 text-lg">{selectedMineral.chemicalComposition}</p>
                </div>
                <button 
                  onClick={closeModal} 
                  className="text-gray-600 hover:text-black transition-colors p-2 hover:bg-gray-200 rounded-lg"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 mt-6 bg-gray-100 rounded-lg p-1">
                {[ 
                  { id: 'overview', label: 'Overview', icon: BookOpen },
                  { id: 'properties', label: 'Properties', icon: Eye },
                  { id: 'uses', label: 'Uses', icon: Zap },
                  { id: 'fun', label: 'Fun Fact', icon: Sparkles }
                ].map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all ${ 
                        activeTab === tab.id 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={selectedMineral.image} 
                      alt={selectedMineral.name} 
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black hover:text-purple-500 mb-4">Quick Facts</h3>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <h4 className="font-semibold text-black mb-1">Difficulty Level</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-3 h-3 rounded-full ${ 
                                i < selectedMineral.difficulty ? 'bg-yellow-400' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-gray-700 ml-2">
                            {selectedMineral.difficulty}/5
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <h4 className="font-semibold text-black mb-1">Chemical Formula</h4>
                        <p className="text-gray-800 font-mono">{selectedMineral.chemicalComposition}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'properties' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-black hover:text-purple-500 mb-4">Physical Properties</h3>
                    <div className="space-y-3">
                      {selectedMineral.properties.map((prop, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-3">
                          <p className="text-gray-700">{prop}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black hover:text-purple-500 mb-4">Found In</h3>
                    <div className="space-y-3">
                      {selectedMineral.commonRocks.map((rock, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-3">
                          <p className="text-gray-700">{rock}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'uses' && (
                <div>
                  <h3 className="text-xl font-bold text-black hover:text-purple-500 mb-4">Applications & Uses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedMineral.uses.map((use, index) => (
                      <div key={index} className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <p className="text-gray-700">{use}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'fun' && (
                <div className="text-center">
                  <div className="bg-purple-100 rounded-2xl p-8 border border-purple-300">
                    <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-black mb-4">Amazing Fact!</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {selectedMineral.funFact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MineralList;