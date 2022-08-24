---
sidebar_position: 4
---

# Whitelisted Users

White-Listed Users can be added to a flag within the frontend UI, and this property can be used to ensure that for these particular users, the flag status will always evaluate to `true`, if the `isActive` property on a flag is also set to `true`. 

If a `userContext` is included within the list of white-listed users of a particular flag, then that specific white-listed user will be shown the new feature. This feature of Tailslide allows developers to easily test their new features in production without affecting the regular user experience.

