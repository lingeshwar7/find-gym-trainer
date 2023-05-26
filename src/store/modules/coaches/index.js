import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null, //lastFetch should hold a timestamp whenever we fetched new data
      coaches: [
          {
            "id": "c1",
            "firstName": "David",
            "lastName": "Wilson",
            "areas": ["HIIT", "Circuit Training", "Sports Conditioning"],
            "description": "I am a passionate fitness coach with 10 years of experience. My expertise lies in high-intensity interval training (HIIT), circuit training, and sports conditioning. I focus on pushing clients to their limits and helping them achieve peak performance in their respective sports or fitness goals.",
            "hourlyRate": 70
          },
          {
            "id": "c2",
            "firstName": "Alex",
            "lastName": "Robinson",
            "areas": ["Martial Arts", "Self-Defense", "Kickboxing"],
            "description": "I am a martial arts expert with 8 years of experience. I specialize in various martial arts disciplines, including self-defense and kickboxing. My classes focus on building discipline, confidence, and physical fitness. Join me to learn effective techniques and unleash your inner warrior!",
            "hourlyRate": 65
          },
      ],
    };
  },
  //   mutations:mutations,
  mutations,
  actions,
  getters,
};
