.form-steps {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
}
@media screen and (max-width: 750px) {
  .form-steps {
    gap: var(--gap-14xl);
  }
}
@media screen and (max-width: 450px) {
  .form-steps {
    gap: var(--gap-base);
  }
}