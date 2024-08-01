---
# Leave the homepage title empty to use the site title
title: "Deep learning"
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
- block: markdown
  content:
    text: |-
        <span style="font-family: palatino; font-size: 14px;">

        # Deep learning

        Deep learning is a subset of machine learning that employs artificial neural networks with multiple layers to model complex patterns in data. It is inspired by the biological processes of the human brain and aims to mimic how neurons signal to one another. Deep learning algorithms automatically learn high-level features from data through a hierarchical learning process, where each layer of the network extracts increasingly complex features. This approach has led to significant advancements in fields such as image recognition, natural language processing, and autonomous driving, among others. Deep learning has become a key technology behind many modern AI applications due to its ability to perform feature extraction and transformation, learning directly from raw data without the need for manual feature engineering.
        
        ## Loss optimization

        ### SGD (Stochastic Gradient Descent)

        SGD is a simple but highly effective approach to fitting linear regression models, especially when the number of samples is large. It updates the model parameters using a gradient of the loss function with respect to the parameters, calculated only on a small subset or a random selection of the entire data set. This subset is known as a batch, and using small batches makes SGD faster for large datasets.

        ## Adam (Adaptive Moment Estimation)

        Adam, which stands for Adaptive Moment Estimation, effectively combines the strengths of two extensions of stochastic gradient descent — Adaptive Gradient Algorithm (AdaGrad) and Root Mean Square Propagation (RMSProp). This optimization algorithm calculates an exponentially decaying average of past gradients (first moment) and squared gradients (second moment). Each parameter has its learning rate adjusted individually, based on these moments, which optimizes the convergence rates of each parameter differently.

        Each parameter is updated with its own learning rate, allowing for personalized adjustments that make Adam particularly effective at handling noisy data such as in sparse datasets commonly found in NLP and computer vision. While Adam is more computationally intensive per iteration compared to simple SGD, due to maintaining additional state variables for each parameter, it often requires fewer epochs to converge, which can compensate for the increased per-iteration cost.

        **Pros:**

        Excellent for handling non-stationary problems thanks to its adaptive learning rates.
        Well-suited for problems with sparse gradients.
        Typically converges faster than SGD in practical applications.

        **Cons:**

        More computationally and memory-intensive than simple SGD, as it requires tracking and updating first and second moment estimates for each parameter.
        Potential convergence to suboptimal points in non-convex optimization tasks; though effective in practice, it might require careful hyperparameter tuning.

        ## Regularization

        ### Dropout layers

        [Dropout: A Simple Way to Prevent Neural Networks from Overfitting](https://jmlr.org/papers/volume15/srivastava14a/srivastava14a.pdf)

        The key idea is to randomly drop units (along with their connections) from the neural network during training. This significantly reduces overfitting and gives major improvements over other regularization methods.

        Dropping a unit out means temporarily removing it from the network, along with all its incoming and outgoing connections

        Dropout simulates a sparse activation from a given layer, which interestingly, in turn, encourages the network to actually learn a sparse representation as a side-effect. As such, it may be used as an alternative to activity regularization for encouraging sparse representations in autoencoder models.

---