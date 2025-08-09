# Modal Components

This directory contains modular modal components for the Internal Haven website. Each modal is now a separate, reusable component for better maintainability and organization.

## Components

### ModalWrapper.jsx
A reusable wrapper component that handles the common modal structure, backdrop, close button, and animations.

**Props:**
- `isOpen` (boolean): Controls modal visibility
- `onClose` (function): Callback to close the modal
- `children` (ReactNode): Modal content

### IntroModal.jsx
The "START HERE" modal that introduces visitors to the coaching approach and includes a newsletter signup.

### WorkModal.jsx
The "MY COACHING APPROACH" modal that explains the coaching methodology and mission.

### AboutModal.jsx
The "MY STORY" modal that shares Alyssa's personal journey and credentials.

### ContactModal.jsx
The "WORK WITH ME" modal that details coaching services and free tools.

### FreebiesModal.jsx
The "FREEBIES" modal (placeholder for future content).

### NewsletterModal.jsx
A nested modal for email signup that can be triggered from other modals.

**Props:**
- `onClose` (function): Callback to close the modal

## Usage

```javascript
import {
  IntroModal,
  WorkModal,
  AboutModal,
  ContactModal,
  FreebiesModal,
  ModalWrapper
} from './components/modals';

// In your component
<ModalWrapper isOpen={!!activeModal} onClose={closeModal}>
  {activeModal === 'intro' && <IntroModal />}
  {activeModal === 'work' && <WorkModal />}
  {activeModal === 'about' && <AboutModal />}
  {activeModal === 'contact' && <ContactModal />}
  {activeModal === 'freebies' && <FreebiesModal />}
</ModalWrapper>
```

## Benefits of Modular Structure

1. **Maintainability**: Each modal is in its own file, making it easier to find and modify specific content
2. **Reusability**: Components can be imported and used in different parts of the application
3. **Separation of Concerns**: Modal logic is separated from the main page component
4. **Testing**: Individual components can be tested in isolation
5. **Code Organization**: Clear file structure makes the codebase more navigable
6. **Performance**: Components can be lazy-loaded if needed in the future

## File Structure

```
src/app/components/modals/
├── index.js              # Exports all modal components
├── ModalWrapper.jsx      # Reusable modal wrapper
├── IntroModal.jsx        # Introduction modal
├── WorkModal.jsx         # Coaching approach modal
├── AboutModal.jsx        # Personal story modal
├── ContactModal.jsx      # Services modal
├── FreebiesModal.jsx     # Freebies modal
├── NewsletterModal.jsx   # Newsletter signup modal
└── README.md            # This documentation
``` 