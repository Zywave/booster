import { d as desc, _ as _$LH, n as noChange, a as nothing, c as css, p as property, q as query, Z as ZywaveBaseElement, h as html, i as ifDefined, b as instance } from './_api-proxy-3fe71983.js';
import { A as AnalyticsTracker } from './_analytics-6ae74d49.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first: Promise<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
  return (obj, name) => {
    return desc(obj, name, {
      async get() {
        await this.updateComplete;
        return this.renderRoot?.querySelector(selector) ?? null;
      }
    });
  };
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = c => (...values) => ({
  // This property needs to remain unminified.
  ['_$litDirective$']: c,
  values
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
  constructor(_partInfo) {}
  // See comment in Disconnectable interface for why this is a getter
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  /** @internal */
  _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */
  _$resolve(part, props) {
    return this.update(part, props);
  }
  update(_part, props) {
    return this.render(...props);
  }
}

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const {
  _ChildPart: ChildPart
} = _$LH;
const wrap = window.ShadyDOM?.inUse && window.ShadyDOM?.noPatch === true ? window.ShadyDOM.wrap : node => node;
const createMarker = () => document.createComment('');
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */
const insertPart = (containerPart, refPart, part) => {
  const container = wrap(containerPart._$startNode).parentNode;
  const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
  if (part === undefined) {
    const startNode = wrap(container).insertBefore(createMarker(), refNode);
    const endNode = wrap(container).insertBefore(createMarker(), refNode);
    part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
  } else {
    const endNode = wrap(part._$endNode).nextSibling;
    const oldParent = part._$parent;
    const parentChanged = oldParent !== containerPart;
    if (parentChanged) {
      part._$reparentDisconnectables?.(containerPart);
      // Note that although `_$reparentDisconnectables` updates the part's
      // `_$parent` reference after unlinking from its current parent, that
      // method only exists if Disconnectables are present, so we need to
      // unconditionally set it here
      part._$parent = containerPart;
      // Since the _$isConnected getter is somewhat costly, only
      // read it once we know the subtree has directives that need
      // to be notified
      let newConnectionState;
      if (part._$notifyConnectionChanged !== undefined && (newConnectionState = containerPart._$isConnected) !== oldParent._$isConnected) {
        part._$notifyConnectionChanged(newConnectionState);
      }
    }
    if (endNode !== refNode || parentChanged) {
      let start = part._$startNode;
      while (start !== endNode) {
        const n = wrap(start).nextSibling;
        wrap(container).insertBefore(start, refNode);
        start = n;
      }
    }
  }
  return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */
const setChildPartValue = (part, value, directiveParent = part) => {
  part._$setValue(value, directiveParent);
  return part;
};
// A sentinel value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.
const RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */
const setCommittedValue = (part, value = RESET_VALUE) => part._$committedValue = value;
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being committed.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */
const getCommittedValue = part => part._$committedValue;
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */
const removePart = part => {
  part._$notifyConnectionChanged?.(false, true);
  let start = part._$startNode;
  const end = wrap(part._$endNode).nextSibling;
  while (start !== end) {
    const n = wrap(start).nextSibling;
    wrap(start).remove();
    start = n;
  }
};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)
const generateMap = (list, start, end) => {
  const map = new Map();
  for (let i = start; i <= end; i++) {
    map.set(list[i], i);
  }
  return map;
};
class RepeatDirective extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.CHILD) {
      throw new Error('repeat() can only be used in text expressions');
    }
  }
  _getValuesAndKeys(items, keyFnOrTemplate, template) {
    let keyFn;
    if (template === undefined) {
      template = keyFnOrTemplate;
    } else if (keyFnOrTemplate !== undefined) {
      keyFn = keyFnOrTemplate;
    }
    const keys = [];
    const values = [];
    let index = 0;
    for (const item of items) {
      keys[index] = keyFn ? keyFn(item, index) : index;
      values[index] = template(item, index);
      index++;
    }
    return {
      values,
      keys
    };
  }
  render(items, keyFnOrTemplate, template) {
    return this._getValuesAndKeys(items, keyFnOrTemplate, template).values;
  }
  update(containerPart, [items, keyFnOrTemplate, template]) {
    // Old part & key lists are retrieved from the last update (which may
    // be primed by hydration)
    const oldParts = getCommittedValue(containerPart);
    const {
      values: newValues,
      keys: newKeys
    } = this._getValuesAndKeys(items, keyFnOrTemplate, template);
    // We check that oldParts, the committed value, is an Array as an
    // indicator that the previous value came from a repeat() call. If
    // oldParts is not an Array then this is the first render and we return
    // an array for lit-html's array handling to render, and remember the
    // keys.
    if (!Array.isArray(oldParts)) {
      this._itemKeys = newKeys;
      return newValues;
    }
    // In SSR hydration it's possible for oldParts to be an array but for us
    // to not have item keys because the update() hasn't run yet. We set the
    // keys to an empty array. This will cause all oldKey/newKey comparisons
    // to fail and execution to fall to the last nested brach below which
    // reuses the oldPart.
    const oldKeys = this._itemKeys ??= [];
    // New part list will be built up as we go (either reused from
    // old parts or created for new keys in this update). This is
    // saved in the above cache at the end of the update.
    const newParts = [];
    // Maps from key to index for current and previous update; these
    // are generated lazily only when needed as a performance
    // optimization, since they are only required for multiple
    // non-contiguous changes in the list, which are less common.
    let newKeyToIndexMap;
    let oldKeyToIndexMap;
    // Head and tail pointers to old parts and new values
    let oldHead = 0;
    let oldTail = oldParts.length - 1;
    let newHead = 0;
    let newTail = newValues.length - 1;
    // Overview of O(n) reconciliation algorithm (general approach
    // based on ideas found in ivi, vue, snabbdom, etc.):
    //
    // * We start with the list of old parts and new values (and
    //   arrays of their respective keys), head/tail pointers into
    //   each, and we build up the new list of parts by updating
    //   (and when needed, moving) old parts or creating new ones.
    //   The initial scenario might look like this (for brevity of
    //   the diagrams, the numbers in the array reflect keys
    //   associated with the old parts or new values, although keys
    //   and parts/values are actually stored in parallel arrays
    //   indexed using the same head/tail pointers):
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [ ,  ,  ,  ,  ,  ,  ]
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
    //                                      item order
    //      newHead ^                 ^ newTail
    //
    // * Iterate old & new lists from both sides, updating,
    //   swapping, or removing parts at the head/tail locations
    //   until neither head nor tail can move.
    //
    // * Example below: keys at head pointers match, so update old
    //   part 0 in-place (no need to move it) and record part 0 in
    //   the `newParts` list. The last thing we do is advance the
    //   `oldHead` and `newHead` pointers (will be reflected in the
    //   next diagram).
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //      newHead ^                 ^ newTail
    //
    // * Example below: head pointers don't match, but tail
    //   pointers do, so update part 6 in place (no need to move
    //   it), and record part 6 in the `newParts` list. Last,
    //   advance the `oldTail` and `oldHead` pointers.
    //
    //         oldHead v              v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
    //                                      & newTail
    //         newHead ^              ^ newTail
    //
    // * If neither head nor tail match; next check if one of the
    //   old head/tail items was removed. We first need to generate
    //   the reverse map of new keys to index (`newKeyToIndexMap`),
    //   which is done once lazily as a performance optimization,
    //   since we only hit this case if multiple non-contiguous
    //   changes were made. Note that for contiguous removal
    //   anywhere in the list, the head and tails would advance
    //   from either end and pass each other before we get to this
    //   case and removals would be handled in the final while loop
    //   without needing to generate the map.
    //
    // * Example below: The key at `oldTail` was removed (no longer
    //   in the `newKeyToIndexMap`), so remove that part from the
    //   DOM and advance just the `oldTail` pointer.
    //
    //         oldHead v           v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
    //         newHead ^           ^ newTail
    //
    // * Once head and tail cannot move, any mismatches are due to
    //   either new or moved items; if a new key is in the previous
    //   "old key to old index" map, move the old part to the new
    //   location, otherwise create and insert a new part. Note
    //   that when moving an old part we null its position in the
    //   oldParts array if it lies between the head and tail so we
    //   know to skip it when the pointers get there.
    //
    // * Example below: neither head nor tail match, and neither
    //   were removed; so find the `newHead` key in the
    //   `oldKeyToIndexMap`, and move that old part's DOM into the
    //   next head position (before `oldParts[oldHead]`). Last,
    //   null the part in the `oldPart` array since it was
    //   somewhere in the remaining oldParts still to be scanned
    //   (between the head and tail pointers) so that we know to
    //   skip that old part on future iterations.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
    //                                      newHead
    //         newHead ^           ^ newTail
    //
    // * Note that for moves/insertions like the one above, a part
    //   inserted at the head pointer is inserted before the
    //   current `oldParts[oldHead]`, and a part inserted at the
    //   tail pointer is inserted before `newParts[newTail+1]`. The
    //   seeming asymmetry lies in the fact that new parts are
    //   moved into place outside in, so to the right of the head
    //   pointer are old parts, and to the right of the tail
    //   pointer are new parts.
    //
    // * We always restart back from the top of the algorithm,
    //   allowing matching and simple updates in place to
    //   continue...
    //
    // * Example below: the head pointers once again match, so
    //   simply update part 1 and record it in the `newParts`
    //   array.  Last, advance both head pointers.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //            newHead ^        ^ newTail
    //
    // * As mentioned above, items that were moved as a result of
    //   being stuck (the final else clause in the code below) are
    //   marked with null, so we always advance old pointers over
    //   these so we're comparing the next actual old value on
    //   either end.
    //
    // * Example below: `oldHead` is null (already placed in
    //   newParts), so advance `oldHead`.
    //
    //            oldHead v     v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
    //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //               newHead ^     ^ newTail
    //
    // * Note it's not critical to mark old parts as null when they
    //   are moved from head to tail or tail to head, since they
    //   will be outside the pointer range and never visited again.
    //
    // * Example below: Here the old tail key matches the new head
    //   key, so the part at the `oldTail` position and move its
    //   DOM to the new head position (before `oldParts[oldHead]`).
    //   Last, advance `oldTail` and `newHead` pointers.
    //
    //               oldHead v  v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
    //                                     advance oldTail & newHead
    //               newHead ^     ^ newTail
    //
    // * Example below: Old and new head keys match, so update the
    //   old head part in place, and advance the `oldHead` and
    //   `newHead` pointers.
    //
    //               oldHead v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
    //                                      newHead
    //                  newHead ^  ^ newTail
    //
    // * Once the new or old pointers move past each other then all
    //   we have left is additions (if old list exhausted) or
    //   removals (if new list exhausted). Those are handled in the
    //   final while loops at the end.
    //
    // * Example below: `oldHead` exceeded `oldTail`, so we're done
    //   with the main loop.  Create the remaining part and insert
    //   it at the new head position, and the update is complete.
    //
    //                   (oldHead > oldTail)
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //                     newHead ^ newTail
    //
    // * Note that the order of the if/else clauses is not
    //   important to the algorithm, as long as the null checks
    //   come first (to ensure we're always working on valid old
    //   parts) and that the final else clause comes last (since
    //   that's where the expensive moves occur). The order of
    //   remaining clauses is just a simple guess at which cases
    //   will be most common.
    //
    // * Note, we could calculate the longest
    //   increasing subsequence (LIS) of old items in new position,
    //   and only move those not in the LIS set. However that costs
    //   O(nlogn) time and adds a bit more code, and only helps
    //   make rare types of mutations require fewer moves. The
    //   above handles removes, adds, reversal, swaps, and single
    //   moves of contiguous items in linear time, in the minimum
    //   number of moves. As the number of multiple moves where LIS
    //   might help approaches a random shuffle, the LIS
    //   optimization becomes less helpful, so it seems not worth
    //   the code at this point. Could reconsider if a compelling
    //   case arises.
    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        // `null` means old part at head has already been used
        // below; skip
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        // `null` means old part at tail has already been used
        // below; skip
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        // Old head matches new head; update in place
        newParts[newHead] = setChildPartValue(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        // Old tail matches new tail; update in place
        newParts[newTail] = setChildPartValue(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        // Old head matches new tail; update and move to new tail
        newParts[newTail] = setChildPartValue(oldParts[oldHead], newValues[newTail]);
        insertPart(containerPart, newParts[newTail + 1], oldParts[oldHead]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        // Old tail matches new head; update and move to new head
        newParts[newHead] = setChildPartValue(oldParts[oldTail], newValues[newHead]);
        insertPart(containerPart, oldParts[oldHead], oldParts[oldTail]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === undefined) {
          // Lazily generate key-to-index maps, used for removals &
          // moves below
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }
        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          // Old head is no longer in new list; remove
          removePart(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          // Old tail is no longer in new list; remove
          removePart(oldParts[oldTail]);
          oldTail--;
        } else {
          // Any mismatches at this point are due to additions or
          // moves; see if we have an old part we can reuse and move
          // into place
          const oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          const oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;
          if (oldPart === null) {
            // No old part for this value; create a new one and
            // insert it
            const newPart = insertPart(containerPart, oldParts[oldHead]);
            setChildPartValue(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            // Reuse old part
            newParts[newHead] = setChildPartValue(oldPart, newValues[newHead]);
            insertPart(containerPart, oldParts[oldHead], oldPart);
            // This marks the old part as having been used, so that
            // it will be skipped in the first two checks above
            oldParts[oldIndex] = null;
          }
          newHead++;
        }
      }
    }
    // Add parts for any remaining new values
    while (newHead <= newTail) {
      // For all remaining additions, we insert before last new
      // tail, since old pointers are no longer valid
      const newPart = insertPart(containerPart, newParts[newTail + 1]);
      setChildPartValue(newPart, newValues[newHead]);
      newParts[newHead++] = newPart;
    }
    // Remove any remaining unused old parts
    while (oldHead <= oldTail) {
      const oldPart = oldParts[oldHead++];
      if (oldPart !== null) {
        removePart(oldPart);
      }
    }
    // Save order of new parts for next round
    this._itemKeys = newKeys;
    // Directly set part value, bypassing it's dirty-checking
    setCommittedValue(containerPart, newParts);
    return noChange;
  }
}
/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * and removals.
 *
 * The `keyFn` takes two parameters, the item and its index, and returns a unique key value.
 *
 * ```js
 * html`
 *   <ol>
 *     ${repeat(this.items, (item) => item.id, (item, index) => {
 *       return html`<li>${index}: ${item.name}</li>`;
 *     })}
 *   </ol>
 * `
 * ```
 *
 * **Important**: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */
const repeat = directive(RepeatDirective);

class Resources {
  static {
    this.cultures = ["en-us", "en-gb"];
  }
  static {
    this.defaultCulture = "en-us";
  }
  static async import(culture) {
    if (!culture || !Resources.cultures.includes(culture.toLowerCase())) {
      culture = Resources.defaultCulture;
    }
    const resourcesImport = await resourceImportMap[culture.toLowerCase()]();
    return resourcesImport.default;
  }
}
// bundlers need some help knowing what files to load
const resourceImportMap = {
  "en-us": () => import('./_en-us_resources-cf3f0c19.js'),
  "en-gb": () => import('./_en-gb_resources-b6ce793d.js')
};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ClassMapDirective extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== 'class' || partInfo.strings?.length > 2) {
      throw new Error('`classMap()` can only be used in the `class` attribute ' + 'and must be the only part in the attribute.');
    }
  }
  render(classInfo) {
    // Add spaces to ensure separation from static classes
    return ' ' + Object.keys(classInfo).filter(key => classInfo[key]).join(' ') + ' ';
  }
  update(part, [classInfo]) {
    // Remember dynamic classes on the first render
    if (this._previousClasses === undefined) {
      this._previousClasses = new Set();
      if (part.strings !== undefined) {
        this._staticClasses = new Set(part.strings.join(' ').split(/\s/).filter(s => s !== ''));
      }
      for (const name in classInfo) {
        if (classInfo[name] && !this._staticClasses?.has(name)) {
          this._previousClasses.add(name);
        }
      }
      return this.render(classInfo);
    }
    const classList = part.element.classList;
    // Remove old classes that no longer apply
    for (const name of this._previousClasses) {
      if (!(name in classInfo)) {
        classList.remove(name);
        this._previousClasses.delete(name);
      }
    }
    // Add or remove classes based on their classMap value
    for (const name in classInfo) {
      // We explicitly want a loose truthy check of `value` because it seems
      // more convenient that '' and 0 are skipped.
      const value = !!classInfo[name];
      if (value !== this._previousClasses.has(name) && !this._staticClasses?.has(name)) {
        if (value) {
          classList.add(name);
          this._previousClasses.add(name);
        } else {
          classList.remove(name);
          this._previousClasses.delete(name);
        }
      }
    }
    return noChange;
  }
}
/**
 * A directive that applies dynamic CSS classes.
 *
 * This must be used in the `class` attribute and must be the only part used in
 * the attribute. It takes each property in the `classInfo` argument and adds
 * the property name to the element's `classList` if the property value is
 * truthy; if the property value is falsy, the property name is removed from
 * the element's `class`.
 *
 * For example `{foo: bar}` applies the class `foo` if the value of `bar` is
 * truthy.
 *
 * @param classInfo
 */
const classMap = directive(ClassMapDirective);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const important = 'important';
// The leading space is important
const importantFlag = ' !' + important;
// How many characters to remove from a value, as a negative number
const flagTrim = 0 - importantFlag.length;
class StyleMapDirective extends Directive {
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== 'style' || partInfo.strings?.length > 2) {
      throw new Error('The `styleMap` directive must be used in the `style` attribute ' + 'and must be the only part in the attribute.');
    }
  }
  render(styleInfo) {
    return Object.keys(styleInfo).reduce((style, prop) => {
      const value = styleInfo[prop];
      if (value == null) {
        return style;
      }
      // Convert property names from camel-case to dash-case, i.e.:
      //  `backgroundColor` -> `background-color`
      // Vendor-prefixed names need an extra `-` appended to front:
      //  `webkitAppearance` -> `-webkit-appearance`
      // Exception is any property name containing a dash, including
      // custom properties; we assume these are already dash-cased i.e.:
      //  `--my-button-color` --> `--my-button-color`
      prop = prop.includes('-') ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&').toLowerCase();
      return style + `${prop}:${value};`;
    }, '');
  }
  update(part, [styleInfo]) {
    const {
      style
    } = part.element;
    if (this._previousStyleProperties === undefined) {
      this._previousStyleProperties = new Set(Object.keys(styleInfo));
      return this.render(styleInfo);
    }
    // Remove old properties that no longer exist in styleInfo
    for (const name of this._previousStyleProperties) {
      // If the name isn't in styleInfo or it's null/undefined
      if (styleInfo[name] == null) {
        this._previousStyleProperties.delete(name);
        if (name.includes('-')) {
          style.removeProperty(name);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style[name] = null;
        }
      }
    }
    // Add or update properties
    for (const name in styleInfo) {
      const value = styleInfo[name];
      if (value != null) {
        this._previousStyleProperties.add(name);
        const isImportant = typeof value === 'string' && value.endsWith(importantFlag);
        if (name.includes('-') || isImportant) {
          style.setProperty(name, isImportant ? value.slice(0, flagTrim) : value, isImportant ? important : '');
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style[name] = value;
        }
      }
    }
    return noChange;
  }
}
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the
 * {@link StyleInfo styleInfo} object and adds the properties to the inline
 * style of the element.
 *
 * Property names with dashes (`-`) are assumed to be valid CSS
 * property names and set on the element's style object using `setProperty()`.
 * Names without dashes are assumed to be camelCased JavaScript property names
 * and set on the element's style object using property assignment, allowing the
 * style object to translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo
 * @see {@link https://lit.dev/docs/templates/directives/#stylemap styleMap code samples on Lit.dev}
 */
const styleMap = directive(StyleMapDirective);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const HTML_RESULT = 1;
class UnsafeHTMLDirective extends Directive {
  constructor(partInfo) {
    super(partInfo);
    this._value = nothing;
    if (partInfo.type !== PartType.CHILD) {
      throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`);
    }
  }
  render(value) {
    if (value === nothing || value == null) {
      this._templateResult = undefined;
      return this._value = value;
    }
    if (value === noChange) {
      return value;
    }
    if (typeof value != 'string') {
      throw new Error(`${this.constructor.directiveName}() called with a non-string value`);
    }
    if (value === this._value) {
      return this._templateResult;
    }
    this._value = value;
    const strings = [value];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strings.raw = strings;
    // WARNING: impersonating a TemplateResult like this is extremely
    // dangerous. Third-party directives should not do this.
    return this._templateResult = {
      // Cast to a known set of integers that satisfy ResultType so that we
      // don't have to export ResultType and possibly encourage this pattern.
      // This property needs to remain unminified.
      ['_$litType$']: this.constructor.resultType,
      strings,
      values: []
    };
  }
}
UnsafeHTMLDirective.directiveName = 'unsafeHTML';
UnsafeHTMLDirective.resultType = HTML_RESULT;
/**
 * Renders the result as HTML, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeHTML = directive(UnsafeHTMLDirective);

const style$2 = css`:host{display:contents}:host *:not(:defined){display:none}.theme-logo{width:auto;height:100%}zui-shell{--zui-shell-primary-theme: var(--zywave-shell-primary-color, var(--zui-blue-500))}zui-shell.theme-loading{--zui-shell-primary-theme: var(--zywave-shell-primary-color, var(--zui-gray-100))}zui-shell.theme-loading zui-logo:not(.static-logo-uri){display:none}.legalese{display:block}.notify-parent{position:fixed;top:var(--zui-shell-topbar-global-height);left:0;width:calc(100vw - 1.25rem);visibility:hidden;margin-top:1.25rem}.profile-types-list,.profile-type-identifier{list-style:none;padding:0}*:not(:defined){display:none;width:0;height:0;visibility:hidden}.feature-flags-header{padding:.625rem .9375rem;background:var(--zui-gray-50);font-weight:700}slot[name=experimentalassistant]{display:none}@media(min-width: 45em){slot[name=experimentalassistant]{display:contents}}::slotted([slot=experimentalassistant]){min-width:0}`;

function sleep(timeoutMs, reject = false) {
  return new Promise((resolve, rej) => {
    setTimeout(() => reject ? rej(new Error("Sleep rejected")) : resolve(), timeoutMs);
  });
}

const style$1 = css`@supports(scrollbar-width: thin){.options-list{scrollbar-color:var(--zui-gray-400) var(--zui-gray-50);scrollbar-width:thin}}@supports not (scrollbar-width: thin){.options-list::-webkit-scrollbar{width:7px;height:7px;background-color:var(--zui-gray-50)}.options-list::-webkit-scrollbar-thumb{background-color:var(--zui-gray-400);border-radius:10px}}:host{display:block}.wrapper{position:relative;width:100%}@media(min-width: 45em){.wrapper{width:auto}}.input-wrapper{position:relative;background:#fff;border-radius:.25rem}.input-wrapper zui-icon{--zui-icon-size: 1.0625rem;position:absolute;top:calc(50% - 0.53125rem);left:.8125rem;z-index:1;fill:var(--zui-gray-400)}.input-wrapper input{position:relative;display:inline-block;width:100%;min-width:0;min-height:2.625rem;z-index:2;vertical-align:middle;padding:0 .625rem 0 2.5rem;background-color:rgba(0,0,0,0);border:.0625rem solid var(--zui-gray-200);border-radius:.25rem;font:inherit;color:inherit;transition:border 100ms ease-in-out,box-shadow 100ms ease-in-out,width 250ms ease-in-out;box-sizing:border-box;appearance:textfield}@media(min-width: 45em){.input-wrapper input{min-width:69ch}}.input-wrapper input::placeholder{color:var(--zui-gray-300)}.input-wrapper input::-webkit-input-placeholder{color:var(--zui-gray-300)}.input-wrapper input::-moz-placeholder{opacity:1;color:var(--zui-gray-300)}.input-wrapper input:-moz-placeholder{opacity:1;color:var(--zui-gray-300)}.input-wrapper input:-ms-input-placeholder{color:var(--zui-gray-300)}.input-wrapper input::-ms-clear{display:none;width:0;height:0}.input-wrapper input::-ms-reveal{display:none;width:0;height:0}.input-wrapper input:not(output):-moz-ui-invalid{box-shadow:none}.input-wrapper input::-webkit-search-decoration,.input-wrapper input::-webkit-search-cancel-button,.input-wrapper input::-webkit-search-results-button,.input-wrapper input::-webkit-search-results-decoration{display:none}.input-wrapper input:hover{border-color:var(--zui-gray-300)}.input-wrapper input:focus{border-color:var(--zui-blue-400);box-shadow:0 0 0 .0625rem var(--zui-blue-400);outline:none}.input-wrapper input[disabled]{background-color:var(--zui-gray-100);cursor:not-allowed;color:var(--zui-gray)}.input-wrapper input[disabled]:hover{border:.0625rem solid var(--zui-gray-200)}.input-wrapper input[readonly]{background:rgba(0,0,0,0);border:0;outline:none;color:var(--zui-gray);pointer-events:none}.options-list{width:calc(100% - 2.5rem);max-width:69ch;max-height:80vh;z-index:1;overflow-y:auto;padding:1.5625rem 0 .9375rem;background-color:#fff;border:0;border-radius:.25rem;box-shadow:0 .0625rem .1875rem .0625rem rgba(0,0,0,.16);color:var(--zui-gray-700);transition:max-height .2s,padding .2s,box-shadow .2s,transform .3s;scroll-behavior:smooth}@media(min-width: 45em){.options-list{width:69ch;max-width:none}}.options-list:popover-open{position:fixed;inset:unset}.options-list .options-group{display:block}.options-list .group-label{display:flex;justify-content:space-between;align-items:center;padding:1.25rem 1.5625rem .75rem;font-size:.75rem;font-weight:700;text-transform:uppercase}.options-list .group-label:first-child{padding-top:0}.options-list .option{display:flex;height:2.6rem;align-items:center;padding:.5rem 1.5625rem;background-color:rgba(0,0,0,0);cursor:pointer;color:var(--zui-gray-600);transition:background-color 100ms ease-in-out;text-decoration:none}.options-list .option:hover{background-color:var(--zui-gray-50)}.options-list .option:focus{background-color:var(--zui-gray-50);outline:none}.options-list .option zui-icon{--zui-icon-size: 1.25rem;align-self:flex-start;margin-top:.5ch;margin-right:.9375rem}.options-list .description{width:calc(100% - 1.875rem);align-self:stretch}.options-list .first-line{font-weight:700}.options-list .second-line{font-size:.75rem;color:var(--zui-gray-500)}.options-list .first-line,.options-list .second-line{display:block;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.options-list .no-results{padding:.5rem 1.5625rem;font-style:italic;color:var(--zui-gray-800)}.see-more{display:block;padding:0 1.5625rem}.see-more a{display:inline-block;vertical-align:baseline;margin:0;padding:.5rem 0 .625rem;font-size:.75rem;font-weight:600;cursor:pointer;color:var(--zui-blue);text-decoration:none}.see-more a:hover{color:var(--zui-blue-400)}.see-more a:focus{outline:.0625rem solid var(--zui-blue);outline-offset:.25rem;text-decoration:none}.see-more a:active{outline:none;color:var(--zui-blue-600);text-decoration:underline}.see-more+.group-label,.no-results+.group-label{margin-top:.625rem;border-top:1px solid var(--zui-gray-100)}.skeleton{position:relative;display:inline-block;height:1.6em;overflow:hidden;background-color:var(--zui-gray-100);border-radius:.1875rem}.skeleton::after{position:absolute;top:0;right:0;bottom:0;left:0;content:"";background-image:linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0));animation:shimmer 2s infinite;transform:translateX(-100%)}@keyframes shimmer{100%{transform:translateX(100%)}}zui-icon.skeleton{width:1.25rem;height:1.25rem;border-radius:50%}.skeleton.group-label{width:10ch;margin:0 1.5625rem .75rem;padding:0}.skeleton.first-line,.skeleton.second-line{height:1.6em}.skeleton.first-line{margin-bottom:.15625rem}.skeleton.second-line{width:70%;margin-top:.15625rem}.skeleton.see-more{width:8ch;margin-left:1.5625rem;padding:0}`;

var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @element 'zywave-shell-omnisearch'
 *
 * @slot - The default slot
 */
class ZywaveShellOmnisearchElement extends ZywaveBaseElement {
  #searchResult;
  #value;
  #timeoutId;
  #polyfillReady;
  #controller;
  #isActive;
  #isLoading;
  #initialListTopValue;
  #handleTopbarHeightChange;
  get value() {
    return this.#value;
  }
  set value(val) {
    const oldVal = this.#value;
    this.#value = val;
    this.requestUpdate("value", oldVal);
  }
  static get styles() {
    return [style$1];
  }
  get #query() {
    return this._input?.value;
  }
  constructor() {
    super();
    this.#value = "";
    this.#isActive = false;
    this.#isLoading = false;
    /**
     * Default placeholder (ghost) text
     */
    this.placeholder = "Search..."; // temporary default
    this.#handleTopbarHeightChange = e => {
      this.#onTopbarHeightChange(e);
    };
  }
  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("topbarheightchange", this.#handleTopbarHeightChange);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("topbarheightchange", this.#handleTopbarHeightChange);
  }
  async firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    this.#polyfillReady = window.zywave?.zapi?._popover?.requiresPolyfill ? window.zywave.zapi._popover.loadPolyfill() : Promise.resolve();
    await this.#polyfillReady;
    // one final update to get the input/list in sync
    this.requestUpdate();
    this.#initialListTopValue = this._input.getBoundingClientRect().top;
  }
  render() {
    return html`
      ${this.#renderPolyfillStyles()}
      <div class="wrapper">${this.#renderInput()} ${this.#renderOptions()}</div>
      <slot></slot>
    `;
  }
  #renderPolyfillStyles() {
    return window.zywave?.zapi?._popover?.requiresPolyfill ? html`<link href="${window.zywave.zapi._popover.cssUri}" rel="stylesheet" />` : nothing;
  }
  #renderInput() {
    return html`
      <div class="input-wrapper">
        <zui-icon icon="zui-search"></zui-icon>
        <input
          id="search"
          aria-label="Search"
          type="search"
          .value="${this.value || ""}"
          placeholder="${this.placeholder ?? ""}"
          @input="${() => this.#onSearchInputUpdate()}"
          @keyup="${e => this.#onInputKeyUp(e)}"
          popovertarget="list"
          autocomplete="nope"
        />
      </div>
    `;
  }
  #renderOptions() {
    if (!this._input) {
      return nothing;
    }
    const inputPosition = this._input.getBoundingClientRect();
    const inlineStyles = {};
    if (window.zywave?.zapi?._popover?.requiresPolyfill) {
      inlineStyles.position = "fixed";
      inlineStyles.inset = "unset";
    }
    inlineStyles.top = `${inputPosition.height}px`;
    // if for whatever reason the input position changes,
    // such as toggling mobile search into and out of view,
    // we need to update the top value to properly position the list
    const newTopValue = this._input.getBoundingClientRect().top;
    if (this.#initialListTopValue !== newTopValue) {
      this.#initialListTopValue = newTopValue;
    }
    if (!window.zywave?.zapi?._popover?.requiresPolyfill) {
      inlineStyles.top = `${this.#initialListTopValue + inputPosition.height}px`;
      inlineStyles.left = `${inputPosition.left}px`;
    }
    // we make a deep clone in case the user resumes querying while loading results
    const results = structuredClone(this.#searchResult ?? []);
    const renderResultItem = item => {
      return html`<a href="${item.href}" class="option" @click="${() => this.#onResultItemClick(item)}"
        ><zui-icon icon="${item.icon ?? "zui-rocket"}" class="small"></zui-icon>
        <div class="description">
          <div class="first-line" title="${item.title}">${item.title}</div>
          <div class="second-line" title="${item.subtitle}">${item.subtitle}</div>
        </div></a
      ></a>`;
    };
    const renderResults = list => {
      return html`<div class="group-label">${list.entityName}</div>
        ${list.items.length > 0 ? repeat(list.items, renderResultItem) : html`<div class="no-results">No results found.</div>`}
        ${list.items.length > 0 ? html`<div class="see-more">
              <a href="${list.items[0].searchPageUri}" @click="${() => this.#onSeeMoreClick(list)}">See all results</a>
            </div>` : nothing}`;
    };
    return html`
      <div id="list" class="options-list" style="${styleMap(inlineStyles)}" popover @toggle="${this.#onPopoverToggle}">
        ${this.#isLoading ? this.#renderSkeleton() : repeat(results, renderResults)}
        <slot></slot>
      </div>
    `;
  }
  #multiplySkeletonOptions() {
    const skeletonOption = () => {
      return html`<div class="option">
        <zui-icon icon="" class="small skeleton"></zui-icon>
        <div class="description">
          <div class="first-line skeleton">&nbsp;</div>
          <div class="second-line skeleton">&nbsp;</div>
        </div>
      </div>`;
    };
    return html`${repeat([1, 2, 3, 4, 5], skeletonOption)}`;
  }
  #renderSkeleton() {
    return html`<div class="group-label skeleton">&nbsp;</div>
      ${this.#multiplySkeletonOptions()}`;
  }
  async #loadSearchResults(query, signal) {
    const start = performance.now();
    const url = new URL("shell/v2.0/search", this.apiUrl);
    if (query) {
      url.searchParams.set("query", query);
    }
    url.searchParams.set("host", window.location.hostname);
    const resp = await this._apiClient.fetch(url, {
      signal
    });
    if (resp instanceof Response && resp.status === 200 && !signal.aborted) {
      const end = performance.now();
      this.#searchResult = await resp.json();
      const eventDetails = {
        duration: end - start,
        query
      };
      for (const entitySearchResult of this.#searchResult) {
        eventDetails[`${entitySearchResult.entityName} - Count`] = entitySearchResult.items?.length ?? 0;
        eventDetails[`${entitySearchResult.entityName} - Timed Out`] = entitySearchResult.timedOut;
        eventDetails[`${entitySearchResult.entityName} - Elapsed Milliseconds`] = entitySearchResult.elapsedMs;
      }
      this.dispatchEvent(new CustomEvent("search", {
        detail: eventDetails,
        bubbles: false
      }));
      this.requestUpdate();
    }
  }
  #onSearchInputUpdate() {
    this.#showPopover();
    this.#isLoading = true;
    this.requestUpdate();
    if (this.#timeoutId) {
      window.clearTimeout(this.#timeoutId);
      this.#controller?.abort();
    }
    this.#controller = new AbortController();
    const signal = this.#controller.signal;
    const task = async () => {
      if (!signal.aborted) {
        await this.#loadSearchResults(this.#query, this.#controller.signal);
        this.#isLoading = false;
        this.requestUpdate();
      }
    };
    this.#timeoutId = window.setTimeout(() => {
      task();
    }, 300);
  }
  #onPopoverToggle(event) {
    this.#isActive = event.oldState === "closed" && event.newState === "open";
    if (!this.#isActive) {
      this.#onDismiss();
    }
  }
  #showPopover() {
    const show = () => {
      this._list?.showPopover?.();
      this._input?.focus();
      this.#isActive = true;
    };
    if (this.#polyfillReady) {
      this.#polyfillReady?.then(show);
    } else {
      show();
    }
  }
  #onResultItemClick(item) {
    const itemDetails = {
      entityName: item.entityName,
      title: item.title,
      subtitle: item.subtitle,
      href: item.href,
      query: this.#query
    };
    this.dispatchEvent(new CustomEvent("clickresult", {
      detail: itemDetails,
      bubbles: false
    }));
  }
  #onSeeMoreClick(list) {
    const listDetails = {
      entityName: list.entityName,
      searchPageUri: list.items[0].searchPageUri,
      query: this.#query
    };
    this.dispatchEvent(new CustomEvent("clickseemore", {
      detail: listDetails,
      bubbles: false
    }));
  }
  #onInputKeyUp(event) {
    if (event.key === "Enter") {
      this.dispatchEvent(new CustomEvent("inputkeypress", {
        detail: {
          key: event.key,
          query: this.#query
        },
        bubbles: false
      }));
    }
  }
  #onDismiss() {
    this.dispatchEvent(new CustomEvent("dismiss", {
      detail: {
        query: this.#query
      },
      bubbles: false
    }));
  }
  #onTopbarHeightChange(e) {
    const event = e;
    const zuiShellTopbarVisible = event.detail?.topbarVisible;
    if (!zuiShellTopbarVisible) {
      this._list.style.transform = `translateY(calc(var(--zui-shell-topbar-global-height) * -1))`;
    } else {
      this._list.style.transform = `none`;
    }
    this.requestUpdate();
  }
}
__decorate$2([property({
  type: String
})], ZywaveShellOmnisearchElement.prototype, "value", null);
__decorate$2([property({
  type: String,
  attribute: "placeholder"
})], ZywaveShellOmnisearchElement.prototype, "placeholder", void 0);
__decorate$2([query("#search")], ZywaveShellOmnisearchElement.prototype, "_input", void 0);
__decorate$2([query("#list")], ZywaveShellOmnisearchElement.prototype, "_list", void 0);
window.customElements.define("zywave-shell-omnisearch", ZywaveShellOmnisearchElement);

const style = css`:host{display:block}:host(:not(:last-of-type):not(:only-of-type)) .feature{margin-bottom:1.25rem}.feature{display:flex;align-items:center;margin:.625rem .9375rem .6875rem}.feature .header{margin-right:.625rem}.feature zui-toggle{margin-left:auto}`;

var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @element 'zywave-shell-feature'
 *
 * @slot - The default slot
 */
class ZywaveShellFeatureElement extends ZywaveBaseElement {
  constructor() {
    super(...arguments);
    /**
     * Feature header
     */
    this.header = "";
    /**
     * Feature description that will appear in a ZUI Tooltip next to the on/off toggle
     */
    this.description = "";
    /**
     * Whether the feature is enabled or disabled
     */
    this.checked = false;
  }
  static get styles() {
    return [style];
  }
  render() {
    return html`<div class="feature">
      <div class="header">${this.header}</div>
      <zui-tooltip position="bottom">
        <zui-icon class="small" icon="zui-details" slot="trigger"></zui-icon>
        <span slot="message">${this.description}</span>
      </zui-tooltip>
      <zui-toggle ?checked="${this.checked}" @change="${() => this.checked = this._toggle.checked}"></zui-toggle>
    </div>`;
  }
}
__decorate$1([property({
  type: String
})], ZywaveShellFeatureElement.prototype, "header", void 0);
__decorate$1([property({
  type: String
})], ZywaveShellFeatureElement.prototype, "description", void 0);
__decorate$1([property({
  type: Boolean,
  reflect: true
})], ZywaveShellFeatureElement.prototype, "checked", void 0);
__decorate$1([query("zui-toggle")], ZywaveShellFeatureElement.prototype, "_toggle", void 0);
window.customElements.define("zywave-shell-feature", ZywaveShellFeatureElement);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const OMNISEARCH_FLAG = "enable-omnisearch";
/**
 * `ZywaveShellElement` defines a Zywave-standard application for consistent design and navigation
 * @element zywave-shell
 *
 * @slot - Unnamed slot used to render the application's content
 * @slot legalese - (optional) Footer text for unique legal requirements (examples include DMW, Compliance Calendar)
 * @slot search - (optional) Slot to provide an application search component using `<zui-search>`
 * @slot nav - (optional) Slot to provide a custom side navigation; use only if your application has a non-standardized navigation
 * @slot context-switcher - (optional) Slot to provide a `<zui-shell-context-switcher>` component to (e.g., agency user viewing an employer's data)
 *
 * @cssprop [--zywave-shell-primary-color=var(--zui-blue)] - The primary color for the application. Note: this isn't required if using `themeable`.
 *
 * @csspart shell - Exposes `zui-shell` for styling
 * @csspart topbar - Exposes `zui-shell-topbar` for styling
 * @csspart content - Exposes `zui-shell-content` for styling
 * @csspart nav - Exposes `zui-shell-nav` for styling
 * @csspart footer - Exposes `zui-shell-footer` for styling
 * @csspart logo - Exposes `zui-shell-topbar` > `zui-logo` for styling
 *
 * @event {CustomEvent} loading - Fired when `ZywaveShellElement` is beginning to load all data needed to function
 * @event {CustomEvent} interactive - Fired when the critical path of shell has completed loading, but extra data may still be loading. `ZywaveShellElement` has begun its first initial render.
 * @event {CustomEvent} complete - Fired when all data has been loaded
 * @event {CustomEvent} load - (deprecated): use `interactive` or `complete` instead.
 *
 * @attr {string | null} [api-base-url=null] - Provide the base URL to the Zywave APIs e.g., https://api.zywave.com/ (Note: The trailing slash is critical, especially if the base URL includes a path.)
 * @attr {string | null} [bearer-token=null] - (optional) Provide a Zywave bearer token for authorization
 * @attr {string | null} [profile-token=null] - (optional) Provide the explicit profile token that your application understands this user to be accessing
 *
 * @prop {string | null} [apiBaseUrl=null] - Provide the base URL to the Zywave APIs e.g., https://api.zywave.com/ (Note: The trailing slash is critical, especially if the base URL includes a path.)
 * @prop {string | null} [bearerToken=null] - (optional) Provide a Zywave bearer token for authorization
 * @prop {string | null} [profileToken=null] - (optional) Provide the explicit profile token that your application understands this user to be accessing
 *
 * @cssState loading - Indicates that the shell is loading
 * @cssState interactive - Indicates that the shell is interactive, but supplemental data is still loading
 * @cssState complete - Indicates that the shell has completed loading all data
 */
class ZywaveShellElement extends ZywaveBaseElement {
  /**
   * Application name
   */
  get appName() {
    return this.#hasOverriddenNav ? this.#appName : null;
  }
  set appName(val) {
    const oldVal = this.#appName;
    this.#appName = val;
    this.requestUpdate("appName", oldVal);
  }
  /**
   * Represents where in the loading lifecycle ZywaveShellElement is.
   */
  get state() {
    return this.#state;
  }
  #resources;
  #appsData;
  #sideNavData;
  #sideNavUtilityData;
  #helpData;
  #userData;
  #profileData;
  #notificationData;
  #systemNotifications;
  #themeData;
  #featureFlagData;
  #searchInfoData;
  #userManagedFlagsData;
  #resourcesLoaded;
  #appsDataLoaded;
  #sideNavDataLoaded;
  #sideNavUtilityDataLoaded;
  #userDataLoaded;
  #profileDataLoaded;
  #notificationDataLoaded;
  #systemNotificationsLoaded;
  #themeDataLoaded;
  #searchReady;
  #notifierController;
  #state;
  #start;
  #end;
  #appName;
  #internals;
  #keydownListener;
  get #loadingTheme() {
    return this.themeable && !this.#themeDataLoaded;
  }
  get #isUserAuthenticated() {
    return !!this.#userData;
  }
  get #enableOmnisearch() {
    return this.#featureFlagData?.[OMNISEARCH_FLAG] ?? false;
  }
  get #userManagedFlags() {
    return this.#userManagedFlagsData;
  }
  get #hasOverriddenNav() {
    return !!(this.querySelector('* > [slot="nav"]') || this.noNav);
  }
  get #hasOverriddenSearch() {
    return !!this.querySelector('* > [slot="search"]') || this.noSearch;
  }
  get #useOmnisearch() {
    const hasSearchInfo = !!this.#searchInfoData?.searchProviders?.length;
    return hasSearchInfo && (this.#enableOmnisearch || !this.#hasOverriddenSearch);
  }
  static get styles() {
    return [style$2];
  }
  constructor() {
    super();
    /**
     * (deprecated)
     */
    this.navTags = null;
    /**
     * The currently active nav item's ID value. This represents itself in a highlighted nav item to help the user identify where they are in the suite. See https://gitlab.com/zywave/devkit/web-sdk/shell-api/-/blob/main/src/Host/appsettings.navitems.json for values.
     */
    this.activeNavId = null;
    /**
     * Indicates whether or not the side nav is in a collapsed state. Can apply to automatically collapse the side nav.
     */
    this.navCollapsed = null;
    /**
     * The copyright year to be used for copyright purposes. This SHOULD be set by the server.
     */
    this.copyrightYear = new Date().getFullYear();
    /**
     * The user's preferred language culture for localization of text
     * @default window.navigator.language
     */
    this.culture = window.navigator.language;
    /**
     * The location to redirect the user to for log out; if not provided, no log out action will be rendered
     */
    this.logoutUserUrl = null;
    /**
     * (optional) An array of profile type codes to help construct profile switch URLs
     */
    this.profileSwitchTypeCodes = null;
    /**
     * The location to redirect the user to for authentication
     */
    this.loginUserUrl = null;
    /**
     * The id of a Core Theme to reference when branding the shell components
     */
    this.themeId = null;
    /**
     * (optional) An override to the default switch profile handler stored on the profile info
     */
    this.switchProfileHandlerUrl = null;
    /**
     * (optional) An override to the default switch profile redirect url stored on the profile info
     */
    this.switchProfileRedirectUrl = null;
    /**
     * Ability to opt-in to use use "branding". This will be turned on for everyone at a later date.
     */
    this.themeable = false;
    /**
     * If set, will not render any side nav
     */
    this.noNav = false;
    /**
     * If set, will indicate the intent to disable search in the topbar
     */
    this.noSearch = false;
    /**
     * Use to override the logo. This should point to a 3:1 aspect-ratio image.
     * Note: this is not needed if using `themeable`.
     */
    this.logoUri = null;
    /**
     * An optional property to directly add `userProperties` to analytics utilities.
     * `givenName`, `familyName`, and `email` are common properties to be used across all platforms; you can provide more properties to this object where applicable.
     */
    this.analyticsUserProperties = null;
    this.#resourcesLoaded = false;
    this.#appsDataLoaded = false;
    this.#sideNavDataLoaded = false;
    this.#sideNavUtilityDataLoaded = false;
    this.#userDataLoaded = false;
    this.#profileDataLoaded = false;
    this.#notificationDataLoaded = false;
    this.#systemNotificationsLoaded = false;
    this.#themeDataLoaded = false;
    this.#searchReady = false;
    this.#state = "loading";
    this.#appName = null;
    this.#internals = null;
    this.#internals = this.attachInternals?.();
    this.#start = window.performance.now();
  }
  connectedCallback() {
    super.connectedCallback();
    this.#onStateChange("loading");
    this.#keydownListener = this.#exportTroubleshootingInfo.bind(this);
    document.addEventListener("keydown", this.#keydownListener);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.#keydownListener) {
      document.removeEventListener("keydown", this.#keydownListener);
      this.#keydownListener = undefined;
    }
  }
  async firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    await this._apiClientReady;
    await this.#loadRequiredShellData();
    this.#loadExtraShellData();
    this.profileSwitchTypeCodes ??= [];
    if (this.#profileData && !this.profileSwitchTypeCodes.includes(this.#profileData.typeCode)) {
      this.profileSwitchTypeCodes.push(this.#profileData.typeCode);
    }
    this.#end = window.performance.now();
    this.updateComplete.then(() => {
      this.#onStateChange("interactive", "loading");
    });
    this.track("ZywaveShellUtilization", {
      navOverridden: this.#hasOverriddenNav.toString(),
      appName: this.appName,
      loadTime: this.#end - this.#start
    });
  }
  render() {
    let primaryColor = this.#themeData?.primaryColor;
    if (primaryColor && primaryColor.startsWith("--")) {
      primaryColor = `var(${primaryColor})`;
    }
    let themeStyles = {};
    if (primaryColor) {
      themeStyles = {
        "--zui-shell-primary-theme": primaryColor,
        "--zui-shell-nav-active-color": primaryColor
      };
    }
    return html`
      ${this.#renderAnalytics()}
      <zui-shell
        style="${styleMap(themeStyles)}"
        part="shell"
        app-name="${this.appName || ""}"
        class="${classMap({
      "theme-loading": this.#loadingTheme
    })}"
      >
        <zui-shell-topbar part="topbar" @topbarheightchange="${this.#onTopbarHeightChange}">
          ${this.#renderApps()} ${this.#renderSearch()} ${this.#renderHelpTraining()} ${this.#renderUser()}
        </zui-shell-topbar>
        ${this.#renderBanner()}
        <slot name="nav">${this.#renderSideNav()}</slot>
        <zui-shell-content part="content">
          <div class="notify-parent"></div>
          <slot></slot>
        </zui-shell-content>
        ${this.#renderFooter()}
      </zui-shell>
    `;
  }
  /**
   * A public method to easily display a notifier to a user
   * @param header - A required value to display as the header; this should be a short phrase
   * @param message - A required value to display as the message; this should be more details about why the user is seeing this notifier
   * @param options - Options to additionally configure the notifier, e.g. the type or the duration
   *
   * For more information, check out https://booster.zywave.dev/design-system/components/notifiers/?tab=usage
   */
  async notify(type, header, message, options) {
    if (!this.#notifierController) {
      const exports = await import('./_notifier-controller-587fb889.js');
      this.#notifierController = new exports.NotifierController(this.shadowRoot, ".notify-parent");
    }
    this.#notifierController.show(type, header, message, options?.duration);
  }
  /**
   * Method used to track custom events. This is a straight paththrough to ZywaveAnalyticsElement.prototype.track.
   * @param eventName Name of the event to track
   * @param payload Optional payload to pass to the event
   */
  track(eventName, payload) {
    AnalyticsTracker.track(eventName, payload);
  }
  #renderApps() {
    const items = this.#appsData || [];
    const topbarLogoUrl = this.logoUri ?? this.#themeData?.topbarLogoUrl;
    const topbarLogoHtml = topbarLogoUrl ? html` <zui-logo
          slot="logo"
          part="logo"
          class="${classMap({
      loading: this.#loadingTheme,
      "static-logo-uri": !!this.logoUri
    })}"
        >
          <img class="theme-logo" src="${topbarLogoUrl}" />
        </zui-logo>` : html`<zui-logo slot="logo" class="${classMap({
      loading: this.#loadingTheme
    })}"></zui-logo>`;
    // if we have no apps to show, why show the launchpad?
    if (!items.length) {
      return topbarLogoHtml;
    }
    const renderNavItem = navItem => {
      return html`
        <zui-shell-apps-item id="${navItem.id}" name="${navItem.text}" url="${navItem.href}"></zui-shell-apps-item>
      `;
    };
    const renderedItems = items?.map(renderNavItem) ?? [];
    return html`
      <zui-shell-apps slot="apps" class="${classMap({
      loading: !this.#appsDataLoaded
    })}">
        ${renderedItems} ${topbarLogoHtml}
      </zui-shell-apps>
    `;
  }
  #renderSearch() {
    if (!this.#searchReady) {
      return nothing;
    } else if (this.#useOmnisearch) {
      return html`<zywave-shell-omnisearch
          slot="search"
          @search="${this.#onSearch}"
          @clickresult="${this.#onOmnisearchResultItemClick}"
          @clickseemore="${this.#onOmnisearchSeeMoreClick}"
          @dismiss="${this.#onOmnisearchDismiss}"
          @inputkeypress="${this.#onOmnisearchInputKeypress}"
        ></zywave-shell-omnisearch>
        <slot name="experimentalassistant" slot="search"></slot>`;
    } else {
      return html`<slot name="search" slot="search"></slot><slot name="experimentalassistant" slot="search"></slot>`;
    }
  }
  #renderSideNav() {
    // if the nav is explicitly removed, or if it's not overridden and there are no nav items, don't render the nav
    if (this.noNav || this.#sideNavDataLoaded && !this.#hasOverriddenNav && !this.#sideNavData?.length) {
      return nothing;
    }
    const sideNavItems = this.#sideNavData || [];
    const utilityItems = this.#sideNavUtilityData || [];
    const isActive = navItem => {
      if (this.activeNavId) {
        return navItem.id?.toLowerCase() === this.activeNavId.toLowerCase();
      } else if (navItem.href) {
        try {
          return window.location.toString().startsWith(new URL(navItem.href).href);
        } catch {
          return false;
        }
      }
      return false;
    };
    const resolveHref = href => {
      if (!href) {
        return href;
      }
      try {
        const url = new URL(href);
        if (window.location.hostname === "localhost" || window.location.origin === url.origin) {
          return url.pathname + url.search;
        }
        return url.href;
      } catch {
        return href;
      }
    };
    const navItemInnards = navItem => {
      const subnav = navItem.items && navItem.items.length;
      return html` <zui-icon slot="icon" icon="${ifDefined(navItem.icon ?? undefined)}"></zui-icon> ${navItem.href ? html`<a
              id="${navItem.id}"
              ?active="${isActive(navItem)}"
              href="${ifDefined(resolveHref(navItem.href))}"
              @click="${this.#onNavItemClick}"
              rel="noopener"
              >${navItem.text}</a
            >` : html`<span id="${navItem.id}">${navItem.text}</span>`}
        ${subnav ? navItem.items.map(childNavItem => html`<a
                  id="${childNavItem.id}"
                  ?active="${isActive(childNavItem)}"
                  href="${ifDefined(resolveHref(childNavItem.href))}"
                  @click="${this.#onNavItemClick}"
                  >${childNavItem.text}</a
                >`) : nothing}`;
    };
    const renderNavItem = navItem => {
      const subnav = navItem.items && navItem.items.length;
      return html`
        <zui-shell-nav-item
          data-nav-id="${navItem.id}"
          ?expanded="${subnav && navItem.items.some(isActive)}"
          ?subnav="${subnav}"
          >${navItemInnards(navItem)}</zui-shell-nav-item
        >
      `;
    };
    const renderUtilityItem = navItem => {
      const subnav = navItem.items && navItem.items.length;
      return html`
        <zui-shell-nav-item
          data-nav-id="${navItem.id}"
          ?expanded="${subnav && navItem.items.some(isActive)}"
          ?subnav="${subnav}"
          slot="utility"
          >${navItemInnards(navItem)}</zui-shell-nav-item
        >
      `;
    };
    const renderedSideNavItems = sideNavItems?.map(renderNavItem) ?? [];
    const renderedUtilityItems = utilityItems?.map(renderUtilityItem) ?? [];
    return html`
      <zui-shell-nav
        part="nav"
        class="${classMap({
      loading: !this.#sideNavDataLoaded || !this.#sideNavUtilityDataLoaded
    })}"
        ?collapsed="${this.navCollapsed}"
        @navcollapsechange="${e => this.navCollapsed = e.detail}"
      >
        <slot name="context-switcher"></slot>
        ${renderedSideNavItems} ${renderedUtilityItems}
      </zui-shell-nav>
    `;
  }
  #renderHelpTraining() {
    if (!this.#helpData?.items?.length) {
      return nothing;
    }
    const renderedItems = this.#helpData.items.map(x => {
      return html`<a id="${x.id}" href="${x.href}" rel="noopener" target="_blank">${x.text}</a>`;
    });
    return html`
      <zui-shell-help
        slot="help"
        id="${this.#helpData?.id}"
        icon="${ifDefined(this.#helpData?.icon ?? undefined)}"
        help-header="${this.#helpData?.text ?? ""}"
        >${renderedItems}
      </zui-shell-help>
    `;
  }
  #renderUser() {
    const resources = this.#resources;
    const userData = this.#userData;
    const profileData = this.#profileData;
    const notificationData = this.#notificationData;
    const hasMultipleProfiles = profileData?.hasMultipleProfiles ?? false;
    let switchProfileUrl = profileData?.switchProfileUrl;
    // coerce it to undefined for ifDefined directive
    switchProfileUrl ??= undefined;
    return html`
      <zui-shell-user
        class="${classMap({
      loading: !this.#userDataLoaded || !this.#profileDataLoaded || !this.#notificationDataLoaded || !this.#resourcesLoaded
    })}"
        slot="user"
        switch-profile-url="${ifDefined(switchProfileUrl)}"
        ?has-multiple-profiles="${hasMultipleProfiles}"
        ?unauthenticated="${this.#isUserAuthenticated !== null && !this.#isUserAuthenticated}"
        login-user-text="${resources?.loginUserText ?? ""}"
        login-user-url="${this.loginUserUrl || ""}"
        avatar="${userData?.picture || ""}"
        username="${userData?.preferred_username || ""}"
        given-name="${userData?.given_name || ""}"
        family-name="${userData?.family_name || ""}"
        logout-user-url="${this.logoutUserUrl || ""}"
        manage-user-url="${userData?.profile || ""}"
        profile-name="${profileData?.profileName || ""}"
        profile-detail="${profileData?.profileDetail || ""}"
        manage-profile-url="${profileData?.manageProfileUrl || ""}"
        ?impersonating="${profileData?.isImpersonating}"
        impersonating-profile-name="${profileData?.impersonatedProfileName || ""}"
        notification-count="${notificationData?.notificationCount || ""}"
        view-notifications-url="${notificationData?.notificationsUrl || ""}"
        user-header="${resources?.userHeader || ""}"
        logout-user-text="${resources?.logoutUserLink || ""}"
        manage-user-text="${resources?.manageUserLink || ""}"
        profile-header="${resources?.profileHeader || ""}"
        manage-profile-text="${resources?.manageProfileLink || ""}"
        switch-profile-text="${resources?.switchProfileLink || ""}"
        impersonating-action="${resources?.impersonatingVerb || ""}"
        notifications-header="${resources?.notificationsHeader || ""}"
        notification-title="${resources?.notificationsLabel || ""}"
        no-notification-title="${resources?.noNotificationsLabel || ""}"
        view-notifications-text="${resources?.notificationsLink || ""}"
      >
        ${this.#userManagedFlags?.length ? this.#renderUserFeatureSection() : nothing}
      </zui-shell-user>
    `;
  }
  #renderUserFeatureSection() {
    const resources = this.#resources;
    const manageUserManagedFlag = flag => {
      this.#featureFlagData[flag] = !this.#featureFlagData[flag];
      const flagDetails = {};
      flagDetails[`Feature flag: ${flag}`] = this.#featureFlagData[flag];
      this.#onFeatureFlagToggled(flagDetails);
      Promise.all([sleep(1500), this.#updateUserManagedFlag(flag, this.#featureFlagData[flag])]).then(() => {
        window.location.reload();
      });
    };
    return html`<div slot="feature-flags">
      <div class="feature-flags-header">${resources?.featureFlagsHeader}</div>
      ${repeat(this.#userManagedFlags ?? [], flag => {
      return html`<zywave-shell-feature
          header="${resources?.featureFlags?.[flag]?.header || ""}"
          description="${resources?.featureFlags?.[flag]?.description || ""}"
          ?checked="${this.#featureFlagData[flag]}"
          @click="${() => manageUserManagedFlag(flag)}"
        ></zywave-shell-feature>`;
    })}
    </div>`;
  }
  async #updateUserManagedFlag(flagKey, flagValue) {
    const url = new URL(`shell/v2.0/featureflag/${flagKey}`, this.apiUrl);
    await this._apiClient.fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value: flagValue
      })
    });
  }
  #renderFooter() {
    const resources = this.#resources;
    const copyright = resources?.copyright.replace("{0}", this.copyrightYear.toString());
    const tld = location.hostname.substring(location.hostname.length - 5) === "co.uk" ? "co.uk" : "com";
    const tosHref = `http://www.zywave.${tld}/terms-conditions/`;
    const privacyHref = `http://www.zywave.${tld}/privacy-statement/`;
    const dmcaHref = `http://www.zywave.${tld}/dmca-notice/`;
    const cookiesHref = `http://www.zywave.${tld}/cookie-usage/`;
    const contactHref = resources?.contactLink;
    return html`
      <zui-shell-footer part="footer" class="${classMap({
      loading: !this.#resourcesLoaded
    })}">
        <div class="legalese">
          <slot name="legalese"></slot>
        </div>
        <div>${copyright}</div>
        <a target="_blank" href="${tosHref}" rel="noopener">${resources?.tosLink || ""}</a>
        <a target="_blank" href="${privacyHref}" rel="noopener">${resources?.privacyLink || ""}</a>
        <a target="_blank" href="${dmcaHref}" rel="noopener">${resources?.dmcaLink || ""}</a>
        <a target="_blank" href="${cookiesHref}" rel="noopener">${resources?.cookiesLink || ""}</a>
        <a target="_blank" href="${ifDefined(contactHref)}">${resources?.contactLinkTitle || ""}</a>
      </zui-shell-footer>
    `;
  }
  #renderAnalytics() {
    const userProperties = this.analyticsUserProperties || null;
    return html`${this.#userDataLoaded ? html`<zywave-analytics
          .userProperties="${userProperties}"
          api-base-url="${ifDefined(this.apiBaseUrl ?? undefined)}"
          bearer-token="${ifDefined(this.bearerToken ?? undefined)}"
          profile-token="${ifDefined(this.profileToken ?? undefined)}"
        ></zywave-analytics>` : nothing}`;
  }
  #renderBanner() {
    const content = this.#systemNotifications?.[0]?.message ?? null;
    return html`${this.#systemNotificationsLoaded && content !== null ? html`<zui-shell-banner type="warning"><span>${unsafeHTML(content)}</span></zui-shell-banner>` : nothing}`;
  }
  async #loadRequiredShellData() {
    const resourcesPromise = this.#loadResources();
    if (this._authorized) {
      await Promise.allSettled([resourcesPromise, this.#loadUserInfo(), this.#loadProfileInfo()]);
      if (this.#isUserAuthenticated) {
        const promises = [this.#loadNavItems(), this.#loadThemeInfo(), this.#loadSearchInfo(), this.#loadFeatureFlags().then(() => {
          if (!this.#enableOmnisearch) {
            this.#searchReady = true;
          }
        })];
        await Promise.allSettled(promises);
      }
    } else {
      await resourcesPromise;
    }
    this.dispatchEvent(new CustomEvent("load"));
    this.requestUpdate();
  }
  async #loadExtraShellData() {
    if (this.#isUserAuthenticated) {
      await Promise.allSettled([this.#loadNotificationInfo(), this.#loadSystemNotifications()]);
      this.#onStateChange("complete", "interactive");
      this.requestUpdate();
    }
  }
  #onStateChange(state, previousState) {
    if (previousState) {
      try {
        this.#internals?.states?.delete(previousState);
      } catch {
        this.#internals?.states?.delete(`--${previousState}`);
      }
    }
    this.#state = state;
    try {
      this.#internals?.states?.add(state);
    } catch {
      this.#internals?.states?.add(`--${state}`);
    }
    /**
     * @ignore
     */
    this.dispatchEvent(new CustomEvent(state));
  }
  async #loadResources() {
    this.#resources = await Resources.import(this.culture);
    this.#resourcesLoaded = true;
    this.requestUpdate();
  }
  async #loadNavItems() {
    const url = new URL(`shell/v2.0/navitem`, this.apiUrl);
    url.searchParams.set("culture", this.culture);
    (this.navTags || []).forEach(navTag => {
      url.searchParams.append("tags", navTag);
    });
    this.#addCacheQueryParams(url);
    const resp = await this._apiClient.fetch(url);
    if (resp instanceof Response && resp.ok) {
      const data = await resp.json();
      this.#appsData = data.filter(item => item.menuType === "Apps");
      this.#appsDataLoaded = true;
      this.#sideNavData = data.filter(item => item.menuType === "SideNav");
      this.#sideNavDataLoaded = true;
      this.#sideNavUtilityData = data.filter(item => item.menuType === "Utility");
      this.#sideNavUtilityDataLoaded = true;
      this.#helpData = data.find(item => item.menuType === "Help");
      this.requestUpdate();
    } else {
      return undefined;
    }
  }
  async #loadUserInfo() {
    const url = new URL("userinfo", this.apiUrl);
    const resp = await this._apiClient.fetch(url);
    if (resp instanceof Response && resp.ok) {
      const data = await resp.json();
      this.#userData = data;
    }
    this.#userDataLoaded = true;
    this.requestUpdate();
  }
  async #loadProfileInfo() {
    const url = new URL("shell/v2.0/profileinfo", this.apiUrl);
    (this.profileSwitchTypeCodes || []).forEach(typeCode => {
      url.searchParams.append("typeCodes", typeCode);
    });
    if (this.switchProfileHandlerUrl) {
      url.searchParams.append("switchProfileHandlerUrl", this.switchProfileHandlerUrl);
    }
    if (this.switchProfileRedirectUrl) {
      url.searchParams.append("switchProfileRedirectUrl", this.switchProfileRedirectUrl);
    }
    const resp = await this._apiClient.fetch(url);
    if (resp instanceof Response && resp.status === 200) {
      const data = await resp.json();
      this.#profileData = data;
      this.#profileDataLoaded = true;
      this.requestUpdate();
    }
  }
  async #loadNotificationInfo() {
    const url = new URL("shell/v2.0/notificationinfo", this.apiUrl);
    this.#addCacheQueryParams(url);
    const resp = await this._apiClient.fetch(url);
    if (resp instanceof Response && resp.status === 200) {
      const data = await resp.json();
      this.#notificationData = data;
      this.#notificationDataLoaded = true;
      this.requestUpdate();
    }
  }
  async #loadSystemNotifications() {
    const url = new URL("shell/v2.0/notification/system", this.apiUrl);
    const resp = await this._apiClient.fetch(url);
    if (resp instanceof Response && resp.status === 200) {
      const data = await resp.json();
      this.#systemNotifications = data;
      this.#systemNotificationsLoaded = true;
      this.requestUpdate();
    }
  }
  async #loadThemeInfo() {
    // showing the "theme loading" styles permanently is more frustrating than the Zywave default
    if (this.themeable) {
      const url = new URL("shell/v2.0/themeinfo", this.apiUrl);
      if (this.themeId) {
        url.searchParams.set("id", this.themeId.toString());
      }
      this.#addCacheQueryParams(url);
      const resp = await this._apiClient.fetch(url);
      if (resp instanceof Response && resp.ok) {
        try {
          const data = await resp.json();
          this.#themeData = data;
        } catch {
          // left empty on purpose; we want to always render some logo and color
        }
      }
    }
    this.#themeDataLoaded = true;
    this.requestUpdate();
  }
  async #loadFeatureFlags() {
    const flagInfo = await this._loadFeatureFlags();
    this.#featureFlagData = flagInfo?.flagValues;
    this.#userManagedFlagsData = flagInfo?.userManagedFlags;
    this.requestUpdate();
  }
  async #loadSearchInfo() {
    const url = new URL("shell/v2.0/search/info", this.apiUrl);
    url.searchParams.set("host", window.location.hostname);
    const resp = await this._apiClient.fetch(url);
    if (resp instanceof Response && resp.status === 200) {
      const data = await resp.json();
      this.#searchInfoData = data;
    }
    this.#searchReady = true;
    this.requestUpdate();
  }
  #onNavItemClick(e) {
    if (e.target instanceof HTMLElement) {
      this.activeNavId = e.target.id;
    }
    if (this.onNavigate) {
      return this.onNavigate(e);
    }
    return true;
  }
  async #onTopbarHeightChange(e) {
    const height = e.detail?.height;
    const div = await this._notifyParent;
    if (height) {
      div.style.top = height;
    } else {
      div.style.top = "";
    }
    if (this.#notifierController) {
      this.#notifierController.resposition();
    }
    this.requestUpdate();
  }
  #addCacheQueryParams(url) {
    if (this.#profileData) {
      url.searchParams.set("profileId", this.#profileData.id);
      url.searchParams.set("profileTypeCode", this.#profileData.typeCode);
    }
  }
  #onSearch(event) {
    this.track("ZywaveShell:Search", event.detail);
  }
  #onOmnisearchResultItemClick(event) {
    this.track("ZywaveShell:SearchResultClicked", event.detail);
  }
  #onOmnisearchSeeMoreClick(event) {
    this.track("ZywaveShell:SeeMoreClicked", event.detail);
  }
  #onOmnisearchDismiss(event) {
    this.track("ZywaveShell:SearchDismissed", event.detail);
  }
  #onOmnisearchInputKeypress(event) {
    this.track("ZywaveShell:SearchKeypress", event.detail);
  }
  #onFeatureFlagToggled(details) {
    this.track("ZywaveShell:FeatureFlagToggled", details);
  }
  #exportTroubleshootingInfo(event) {
    if (event.ctrlKey && event.altKey && event.code === "KeyZ") {
      const details = {
        url: window.location.href,
        userAgent: window.navigator.userAgent,
        referrer: document.referrer
      };
      let userData = {};
      if (this.#userData) {
        userData = {
          sub: this.#userData.sub,
          given_name: this.#userData.given_name,
          family_name: this.#userData.family_name,
          preferred_username: this.#userData.preferred_username,
          email: this.#userData.email
        };
      }
      let profileData = {};
      if (this.#profileData) {
        profileData = {
          profileId: this.#profileData.id,
          profileTypeCode: this.#profileData.typeCode,
          isImpersonating: this.#profileData.isImpersonating
        };
      }
      // eslint-disable-next-line no-console
      console.table({
        ...details,
        ...userData,
        ...profileData
      });
    }
  }
}
__decorate([property({
  type: String,
  attribute: "app-name"
})], ZywaveShellElement.prototype, "appName", null);
__decorate([property({
  type: Array,
  attribute: "nav-tags"
})], ZywaveShellElement.prototype, "navTags", void 0);
__decorate([property({
  type: String,
  attribute: "active-nav-id"
})], ZywaveShellElement.prototype, "activeNavId", void 0);
__decorate([property({
  type: Boolean,
  attribute: "nav-collapsed"
})], ZywaveShellElement.prototype, "navCollapsed", void 0);
__decorate([property({
  type: Number,
  attribute: "copyright-year"
})], ZywaveShellElement.prototype, "copyrightYear", void 0);
__decorate([property({
  type: String,
  attribute: "culture"
})], ZywaveShellElement.prototype, "culture", void 0);
__decorate([property({
  type: String,
  attribute: "logout-user-url"
})], ZywaveShellElement.prototype, "logoutUserUrl", void 0);
__decorate([property({
  type: Array,
  attribute: "profile-switch-type-codes"
})], ZywaveShellElement.prototype, "profileSwitchTypeCodes", void 0);
__decorate([property({
  type: String,
  attribute: "login-user-url"
})], ZywaveShellElement.prototype, "loginUserUrl", void 0);
__decorate([property({
  type: Number,
  attribute: "theme-id"
})], ZywaveShellElement.prototype, "themeId", void 0);
__decorate([property({
  type: String,
  attribute: "switch-profile-handler-url"
})], ZywaveShellElement.prototype, "switchProfileHandlerUrl", void 0);
__decorate([property({
  type: String,
  attribute: "switch-profile-redirect-url"
})], ZywaveShellElement.prototype, "switchProfileRedirectUrl", void 0);
__decorate([property({
  type: Boolean
})], ZywaveShellElement.prototype, "themeable", void 0);
__decorate([property({
  type: Boolean,
  attribute: "no-nav"
})], ZywaveShellElement.prototype, "noNav", void 0);
__decorate([property({
  type: Boolean,
  attribute: "no-search"
})], ZywaveShellElement.prototype, "noSearch", void 0);
__decorate([property({
  type: String,
  attribute: "logo-uri"
})], ZywaveShellElement.prototype, "logoUri", void 0);
__decorate([property({
  type: Object,
  attribute: "analytics-user-properties"
})], ZywaveShellElement.prototype, "analyticsUserProperties", void 0);
__decorate([queryAsync(".notify-parent")], ZywaveShellElement.prototype, "_notifyParent", void 0);
window.customElements.define("zywave-shell", ZywaveShellElement);

class ZywaveApiClient {
  #apiProxyElement;
  get apiUrl() {
    return this.apiBaseUrl ? new URL(this.apiBaseUrl, window.location.origin.toString()) : undefined;
  }
  constructor(opts) {
    if (!opts || opts?.apiProxyElement || opts?.proxy) {
      if (opts?.apiProxyElement) {
        this.#apiProxyElement = opts.apiProxyElement;
      } else {
        const selector = opts?.proxy ? `zywave-api-proxy[name="${opts.proxy}"]` : "zywave-api-proxy";
        this.#apiProxyElement = document.querySelector(selector);
      }
      if (!this.#apiProxyElement) {
        throw new Error("To use the configuration-less ZywaveApiClient, the proxy element must be in the document or must be provided.");
      }
    } else if (!opts.apiBaseUrl?.trim().length) {
      throw new Error("apiBaseUrl is required if not using the API Proxy.");
    } else if (!opts.bearerToken) {
      throw new Error("bearerToken is required if not using the API Proxy.");
    } else {
      this.apiBaseUrl = opts.apiBaseUrl;
      this.bearerToken = opts.bearerToken;
      this.profileToken = opts.profileToken;
    }
  }
  async fetch(input, init) {
    if (this.#apiProxyElement) {
      const result = await this.#apiProxyElement._apiClient.fetch(input, init);
      if (result instanceof Response) {
        return result;
      }
      throw result;
    }
    init = init ?? {};
    init.headers = new Headers(init.headers);
    if (this.bearerToken) {
      init.headers.set("Authorization", `Bearer ${this.bearerToken}`);
    }
    if (this.profileToken) {
      init.headers.set("Profile", `Token ${this.profileToken}`);
    }
    if (!init.credentials) {
      init.credentials = "include";
    }
    let request;
    if (typeof input === "string" || input instanceof URL) {
      const url = new URL(input.toString(), this.apiUrl);
      request = new Request(url.toString());
    } else {
      const url = new URL(input.url, this.apiUrl);
      request = new Request(url.toString(), input);
    }
    return window.fetch(request, init);
  }
}

// api-proxy must be loaded first

// eslint-disable-next-line no-prototype-builtins
const requiresPopoverPolyfill = !HTMLElement.prototype.hasOwnProperty("popover");
const currentUrl = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));
window.zywave = Object.assign({}, window.zywave, {
  ZywaveApiClient
});
window.zywave.zapi = {
  ...window.zywave.zapi,
  analytics: instance,
  _popover: {
    requiresPolyfill: requiresPopoverPolyfill,
    loadPolyfill: () => import('./_popover-042972f3.js'),
    cssUri: `${currentUrl}/_polyfills/popover/popover.css`
  }
};

export { Resources as R };
