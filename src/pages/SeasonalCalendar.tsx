import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Leaf, Flower2, Sun, Cloud } from 'lucide-react';

interface PlantActivity {
  month: string;
  season: 'spring' | 'summer' | 'fall' | 'winter';
  plantingTasks: string[];
  maintenanceTasks: string[];
  harvestTips: string[];
  icon: typeof Leaf;
  color: string;
}

const calendarData: PlantActivity[] = [
  {
    month: 'Spring',
    season: 'spring',
    icon: Flower2,
    color: '#A4C2A5',
    plantingTasks: [
      'Plant cool-season vegetables (lettuce, peas, spinach)',
      'Start warm-season seeds indoors',
      'Plant bare-root roses and fruit trees',
      'Sow wildflower seeds',
      'Transplant perennials',
    ],
    maintenanceTasks: [
      'Prune spring-flowering shrubs after bloom',
      'Apply pre-emergent herbicide',
      'Fertilize lawn and garden beds',
      'Clean and repair irrigation systems',
      'Mulch garden beds',
    ],
    harvestTips: [
      'Harvest early greens and herbs',
      'Pick spring flowers for arrangements',
      'Enjoy early strawberries',
    ],
  },
  {
    month: 'Summer',
    season: 'summer',
    icon: Sun,
    color: '#88B391',
    plantingTasks: [
      'Plant heat-loving annuals',
      'Sow fall vegetable seeds',
      'Plant tropical plants',
      'Add container gardens',
      'Install drought-tolerant natives',
    ],
    maintenanceTasks: [
      'Water deeply and consistently',
      'Deadhead flowers regularly',
      'Monitor for pests and diseases',
      'Mow lawn at higher setting',
      'Prune summer-blooming shrubs',
    ],
    harvestTips: [
      'Harvest tomatoes, peppers, squash',
      'Pick herbs before flowering',
      'Enjoy summer berries',
      'Cut flowers in early morning',
    ],
  },
  {
    month: 'Fall',
    season: 'fall',
    icon: Leaf,
    color: '#3B755F',
    plantingTasks: [
      'Plant spring-flowering bulbs',
      'Sow cool-season vegetables',
      'Plant trees and shrubs',
      'Overseed lawns',
      'Plant winter annuals (pansies, kale)',
    ],
    maintenanceTasks: [
      'Rake and compost leaves',
      'Aerate lawns',
      'Divide perennials',
      'Clean garden beds',
      'Winterize irrigation systems',
    ],
    harvestTips: [
      'Harvest root vegetables',
      'Collect seeds for next year',
      'Pick fall greens',
      'Gather decorative gourds',
    ],
  },
  {
    month: 'Winter',
    season: 'winter',
    icon: Cloud,
    color: '#7A9C8A',
    plantingTasks: [
      'Plant dormant trees and shrubs',
      'Start seeds indoors for spring',
      'Force spring bulbs indoors',
      'Plant winter containers',
    ],
    maintenanceTasks: [
      'Prune deciduous trees',
      'Apply dormant oil spray',
      'Protect tender plants from frost',
      'Plan next season\'s garden',
      'Clean and sharpen tools',
    ],
    harvestTips: [
      'Harvest winter greens',
      'Collect evergreen clippings',
      'Enjoy winter vegetables',
    ],
  },
];

export function SeasonalCalendar() {
  const [selectedSeason, setSelectedSeason] = useState<PlantActivity>(calendarData[0]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            // src="https://images.unsplash.com/photo-1667859626967-544340ba847f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBnYXJkZW4lMjBuYXR1cmV8ZW58MXx8fHwxNzYxNTAyNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            src="assets/images/Magboulevarddubaisouth/e1915a6e-c9d6-44df-828a-d2410d2ffd69.JPG"
            alt="Seasonal Calendar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Seasonal Planting Calendar
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your year-round guide to successful gardening
          </motion.p>
        </div>
      </section>

      {/* Season Selector */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {calendarData.map((season, index) => (
              <motion.button
                key={season.month}
                onClick={() => setSelectedSeason(season)}
                className={`relative p-6 rounded-lg transition-all ${
                  selectedSeason.month === season.month
                    ? 'bg-gradient-to-br from-[#3B755F] to-[#88B391] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <season.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="uppercase tracking-wider text-sm">{season.month}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Season Details */}
      <section className="py-12 bg-[#F9FBF9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedSeason.month}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* Planting Tasks */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${selectedSeason.color}20` }}
                  >
                    <Flower2 className="w-5 h-5" style={{ color: selectedSeason.color }} />
                  </div>
                  <h3 className="text-[#3B755F]">Planting Tasks</h3>
                </div>
                <ul className="space-y-2">
                  {selectedSeason.plantingTasks.map((task, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: selectedSeason.color }}
                      />
                      {task}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Maintenance Tasks */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${selectedSeason.color}20` }}
                  >
                    <Leaf className="w-5 h-5" style={{ color: selectedSeason.color }} />
                  </div>
                  <h3 className="text-[#3B755F]">Maintenance</h3>
                </div>
                <ul className="space-y-2">
                  {selectedSeason.maintenanceTasks.map((task, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: selectedSeason.color }}
                      />
                      {task}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Harvest Tips */}
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${selectedSeason.color}20` }}
                  >
                    <Sun className="w-5 h-5" style={{ color: selectedSeason.color }} />
                  </div>
                  <h3 className="text-[#3B755F]">Harvest & Tips</h3>
                </div>
                <ul className="space-y-2">
                  {selectedSeason.harvestTips.map((tip, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: selectedSeason.color }}
                      />
                      {tip}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#A4C2A5]/10 to-[#3B755F]/10 p-8 rounded-lg">
            <h3 className="text-[#3B755F] mb-4">Pro Tips</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#3B755F]">•</span>
                <span>Always check your local frost dates before planting tender plants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3B755F]">•</span>
                <span>Water in the early morning to reduce disease and water loss</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3B755F]">•</span>
                <span>Keep a garden journal to track what works best in your specific climate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#3B755F]">•</span>
                <span>Mulch beds to conserve moisture and suppress weeds year-round</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
