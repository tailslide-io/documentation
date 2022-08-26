---
sidebar_position: 5
---

# Gradual Percentage rollout

Tailslide also allows for the gradual rollout of specific features to a subset of the user base. This is done via hashing. 

Each time the `isFlagActive` function is called to determine whether a flag gets evaluated to true or false, a unique `userContext` UUID is hashed to generate a number between 1 and 100. If that hashed number turns out to be greater than the rollout percentage, the flag will evaluate as `false`, and if the hashed number turns out to be less than or equal to the rollout percentage, the flag will evaluate to `true`.

Because effective hashing functions uniformly distribute the data across the entire set of possible hash values, this process ensures that the distribution is in line with the percentage rollout figure set. 

Note that the gradual rollout validation occurs after the white-listed user check - see the logic flow evaluation tree.

<div style={{textAlign: 'center'}}>
  <img src={require('./../assets/rollout_hash_diagram.png').default} alt='Gif of Tailslide UI creating new flag' />
</div>