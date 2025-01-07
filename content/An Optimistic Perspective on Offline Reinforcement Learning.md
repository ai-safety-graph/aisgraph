# An Optimistic Perspective on Offline Reinforcement Learning
http://arxiv.org/abs/1907.04543v4
## Abstract
Off-policy reinforcement learning (RL) using a fixed offline dataset of logged interactions is an important consideration in real world applications. This paper studies offline RL using the DQN replay dataset comprising the entire replay experience of a DQN agent on 60 Atari 2600 games. We demonstrate that recent off-policy deep RL algorithms, even when trained solely on this fixed dataset, outperform the fully trained DQN agent. To enhance generalization in the offline setting, we present Random Ensemble Mixture (REM), a robust Q-learning algorithm that enforces optimal Bellman consistency on random convex combinations of multiple Q-value estimates. Offline REM trained on the DQN replay dataset surpasses strong RL baselines. Ablation studies highlight the role of offline dataset size and diversity as well as the algorithm choice in our positive results. Overall, the results here present an optimistic view that robust RL algorithms trained on sufficiently large and diverse offline datasets can lead to high quality policies. The DQN replay dataset can serve as an offline RL benchmark and is open-sourced.