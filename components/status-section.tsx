import React from 'react';
import { Difficulty } from '@/components/difficulty';
import { Timer } from '@/components/timer';
import { Numbers } from '@/components/numbers';
import { Action } from '@/components/action';
import { Mode } from '@/components/mode';

type StatusSectionProps = {
     onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
     onClickNumber: (number: string) => void,
     onClickUndo: () => void,
     onClickErase: () => void,
     onClickHint: () => void,
     onClickMistakesMode: () => void,
     onClickFastMode: () => void,
};

/**
 * React component for the Status Section.
 */
export const StatusSection = (props: StatusSectionProps) => {
     return (
          <section className="status">
               <Difficulty onChange={props.onChange} />
               <Timer />
               <Numbers onClickNumber={(number) => props.onClickNumber(number)} />
               <div className="status__actions">
                    <Action action='undo' onClickAction={props.onClickUndo} />
                    <Action action='erase' onClickAction={props.onClickErase} />
                    <Action action='hint' onClickAction={props.onClickHint} />
                    <Mode mode='mistakes' onClickMode={props.onClickMistakesMode} />
                    <Mode mode='fast' onClickMode={props.onClickFastMode} />
               </div>
          </section>
     )
}