import { ulid } from "ulid";

/**
 * Simple random identifier generator
 * This provides a UniversalUniqueId
 *
 * I checked a few libraries, like: uuid, uuid-random, flake, and ulid.
 * ulid seemed the most convincing.
 * This "alias" function was introduced so I can change the generator
 * library easily, would it be necessary.
 */
export default function guid(): string {
  return ulid();
}
