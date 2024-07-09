import React, { ReactNode, useEffect, useRef } from "react";
type Props = {
  active: boolean;
  close: () => void;
  children: ReactNode;
};

export default function Modal({ active, close, children }: Props) {
  const ref = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    if (active && ref.current) ref.current?.showModal();
  }, [active]);
  return (
    <dialog id="modal" className="modal" ref={ref}>
      <div className="modal-box">{children}</div>
      <form method="dialog" onSubmit={close} className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
